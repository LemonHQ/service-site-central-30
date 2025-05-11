
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from "@/components/ui/button";
import { supabase } from '@/integrations/supabase/client';
import CoCreateAssessmentForm from '@/components/assessment/CoCreateAssessmentForm';
import CoCreateAssessmentResults from '@/components/assessment/CoCreateAssessmentResults';

const CoCreateAssessment = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    question1: -1,
    question2: [] as number[],
    question3: -1,
    question4: -1,
    question5: -1,
    question6: [] as number[],
    question7: -1,
    question8: -1,
    question9: -1,
    question10: [] as number[]
  });
  const [userData, setUserData] = useState({
    name: '',
    email: ''
  });
  const [totalScore, setTotalScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const calculateScore = () => {
    let score = 0;
    
    // Question 1
    score += answers.question1;
    
    // Question 2
    score += Math.min(answers.question2.reduce((acc, curr) => acc + curr, 0), 4);
    
    // Questions 3-9
    score += answers.question3;
    score += answers.question4;
    score += answers.question5;
    score += Math.min(answers.question6.reduce((acc, curr) => acc + curr, 0), 4);
    score += answers.question7;
    score += answers.question8;
    score += answers.question9;
    
    // Question 10 (cap at 3)
    score += Math.min(answers.question10.reduce((acc, curr) => acc + curr, 0), 3);
    
    return score;
  };

  const handleSubmit = async () => {
    if (!userData.name || !userData.email) {
      toast.error("Please provide your name and email to continue");
      return;
    }

    setIsLoading(true);
    
    const score = calculateScore();
    setTotalScore(score);
    
    try {
      const { error } = await supabase.from('co_create_assessments').insert({
        name: userData.name,
        email: userData.email,
        question1_answer: answers.question1,
        question2_answers: answers.question2,
        question3_answer: answers.question3,
        question4_answer: answers.question4,
        question5_answer: answers.question5,
        question6_answers: answers.question6,
        question7_answer: answers.question7,
        question8_answer: answers.question8,
        question9_answer: answers.question9,
        question10_answers: answers.question10,
        total_score: score
      });
      
      if (error) throw error;
      
      setIsSubmitted(true);
      toast.success("Assessment completed successfully!");
    } catch (error) {
      console.error("Error submitting assessment:", error);
      toast.error("There was an error submitting your assessment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextStep = () => {
    if (step === 10) {
      handleSubmit();
    } else {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };
  
  const resetAssessment = () => {
    setStep(0);
    setAnswers({
      question1: -1,
      question2: [],
      question3: -1,
      question4: -1,
      question5: -1,
      question6: [],
      question7: -1,
      question8: -1,
      question9: -1,
      question10: []
    });
    setUserData({ name: '', email: '' });
    setTotalScore(0);
    setIsSubmitted(false);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {!isSubmitted ? (
          <div className="bg-white shadow-md rounded-lg p-8">
            <h1 className="text-3xl font-bold text-brand-600 mb-8">Co-Create Readiness Assessment</h1>
            
            <CoCreateAssessmentForm 
              step={step}
              answers={answers}
              setAnswers={setAnswers}
              userData={userData}
              setUserData={setUserData}
            />
            
            <div className="flex justify-between mt-8">
              {step > 0 && (
                <Button 
                  variant="outline" 
                  onClick={handlePreviousStep}
                  disabled={isLoading}
                >
                  Previous
                </Button>
              )}
              <div className="ml-auto">
                <Button 
                  onClick={handleNextStep}
                  disabled={isLoading}
                >
                  {step < 10 ? 'Next' : 'Complete Assessment'}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <CoCreateAssessmentResults 
            score={totalScore} 
            answers={answers}
            resetAssessment={resetAssessment}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default CoCreateAssessment;
