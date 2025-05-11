
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

  // Map of questions text for data storage
  const questionsData = {
    question1: {
      text: "How would you describe your current offering portfolio?",
      options: [
        { value: 0, text: "Single unified product" },
        { value: 2, text: "Multiple products for different segments" },
        { value: 1, text: "Multiple offerings with overlapping value" },
        { value: 3, text: "Legacy-heavy suite in need of rework" }
      ]
    },
    question2: {
      text: "Are you currently exploring or planning any of the following?",
      options: [
        { value: 1, text: "Launching a new product or sub-brand" },
        { value: 2, text: "Repositioning an existing offering" },
        { value: 3, text: "Entering a new customer segment" },
        { value: 4, text: "Rationalizing or unbundling product lines" },
        { value: 0, text: "None of the above" }
      ]
    },
    question3: {
      text: "How well are your customer segments defined?",
      options: [
        { value: 0, text: "Not defined" },
        { value: 1, text: "Partially defined" },
        { value: 2, text: "Well defined with insights" },
        { value: 3, text: "Continuously validated" }
      ]
    },
    question4: {
      text: "How confident are you that your offerings meet specific customer needs?",
      options: [
        { value: 0, text: "Low" },
        { value: 1, text: "Moderate" },
        { value: 2, text: "High" },
        { value: 3, text: "Proven with data" }
      ]
    },
    question5: {
      text: "How does your organization validate new ideas?",
      options: [
        { value: 0, text: "Intuition or internal input" },
        { value: 1, text: "Occasional pilots/testing" },
        { value: 2, text: "Structured discovery cycles" },
        { value: 3, text: "Co-create with customers" }
      ]
    },
    question6: {
      text: "What internal capabilities do you have to support innovation?",
      options: [
        { value: 1, text: "Research & insight" },
        { value: 2, text: "Experience or service design" },
        { value: 3, text: "Prototyping & testing" },
        { value: 4, text: "Go-to-market readiness" },
        { value: 0, text: "None" }
      ]
    },
    question7: {
      text: "Are teams aligned on innovation goals and metrics?",
      options: [
        { value: 0, text: "Rarely" },
        { value: 1, text: "Somewhat" },
        { value: 2, text: "Mostly aligned" },
        { value: 3, text: "Fully aligned" }
      ]
    },
    question8: {
      text: "How easy is it for teams to move from idea to execution?",
      options: [
        { value: 0, text: "Difficult—lots of friction" },
        { value: 1, text: "Slow, but manageable" },
        { value: 2, text: "Efficient in defined tracks" },
        { value: 3, text: "Agile and collaborative" }
      ]
    },
    question9: {
      text: "How open is your organization to external collaboration?",
      options: [
        { value: 0, text: "We prefer to keep it in-house" },
        { value: 1, text: "Open to short-term partners" },
        { value: 2, text: "Seek co-creation partners" },
        { value: 3, text: "Already work this way" }
      ]
    },
    question10: {
      text: "What support would you value from a co-creation partner?",
      options: [
        { value: 1, text: "Strategy & discovery" },
        { value: 2, text: "Experience design" },
        { value: 3, text: "Prototyping & validation" },
        { value: 4, text: "Market testing" },
        { value: 5, text: "Launch planning" },
        { value: 6, text: "Stakeholder alignment" }
      ]
    }
  };

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
      // Create selected options text mapping
      const getSelectedOptionsText = (questionKey: string, selectedValues: number | number[]) => {
        const question = questionsData[questionKey as keyof typeof questionsData];
        if (Array.isArray(selectedValues)) {
          return selectedValues.map(value => {
            const option = question.options.find(opt => opt.value === value);
            return option ? option.text : '';
          });
        } else {
          const option = question.options.find(opt => opt.value === selectedValues);
          return option ? option.text : '';
        }
      };
      
      // Build complete questions data for storing
      const completeQuestionsData = {
        question1: {
          question: questionsData.question1.text,
          answer: answers.question1,
          answerText: getSelectedOptionsText('question1', answers.question1)
        },
        question2: {
          question: questionsData.question2.text,
          answers: answers.question2,
          answersText: getSelectedOptionsText('question2', answers.question2)
        },
        question3: {
          question: questionsData.question3.text,
          answer: answers.question3,
          answerText: getSelectedOptionsText('question3', answers.question3)
        },
        question4: {
          question: questionsData.question4.text,
          answer: answers.question4,
          answerText: getSelectedOptionsText('question4', answers.question4)
        },
        question5: {
          question: questionsData.question5.text,
          answer: answers.question5,
          answerText: getSelectedOptionsText('question5', answers.question5)
        },
        question6: {
          question: questionsData.question6.text,
          answers: answers.question6,
          answersText: getSelectedOptionsText('question6', answers.question6)
        },
        question7: {
          question: questionsData.question7.text,
          answer: answers.question7,
          answerText: getSelectedOptionsText('question7', answers.question7)
        },
        question8: {
          question: questionsData.question8.text,
          answer: answers.question8,
          answerText: getSelectedOptionsText('question8', answers.question8)
        },
        question9: {
          question: questionsData.question9.text,
          answer: answers.question9,
          answerText: getSelectedOptionsText('question9', answers.question9)
        },
        question10: {
          question: questionsData.question10.text,
          answers: answers.question10,
          answersText: getSelectedOptionsText('question10', answers.question10)
        }
      };

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
        total_score: score,
        questions_data: completeQuestionsData
      });
      
      if (error) throw error;
      
      setIsSubmitted(true);
      toast.success("Assessment completed! Results have been sent to your email.");
    } catch (error) {
      console.error("Error submitting assessment:", error);
      toast.error("There was an error submitting your assessment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextStep = () => {
    // For questions sections
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    
    // For user information section (step 2)
    if (step === 2) {
      setStep(step + 1);
      return;
    }
    
    // Submit form on last step
    if (step === 3) {
      handleSubmit();
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

  // Check if current step needs to be validated
  const isCurrentStepValid = () => {
    if (step === 0) {
      return answers.question1 >= 0 && answers.question3 >= 0 && answers.question4 >= 0;
    } else if (step === 1) {
      return answers.question5 >= 0 && answers.question7 >= 0 && answers.question8 >= 0;
    } else if (step === 2) {
      return answers.question9 >= 0;
    } else if (step === 3) {
      return userData.name.trim() !== '' && userData.email.trim() !== '';
    }
    return true;
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {!isSubmitted ? (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-brand-600 mb-6">Co-Create Readiness Assessment</h1>
            
            <CoCreateAssessmentForm 
              step={step}
              answers={answers}
              setAnswers={setAnswers}
              userData={userData}
              setUserData={setUserData}
            />
            
            <div className="flex justify-between mt-6">
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
                  disabled={isLoading || !isCurrentStepValid()}
                >
                  {step < 3 ? 'Next' : 'Complete Assessment'}
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <CoCreateAssessmentResults 
            score={totalScore} 
            answers={answers}
            resetAssessment={resetAssessment}
            userData={userData}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default CoCreateAssessment;
