
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

interface CoCreateAssessmentFormProps {
  step: number;
  answers: {
    question1: number;
    question2: number[];
    question3: number;
    question4: number;
    question5: number;
    question6: number[];
    question7: number;
    question8: number;
    question9: number;
    question10: number[];
  };
  setAnswers: React.Dispatch<React.SetStateAction<{
    question1: number;
    question2: number[];
    question3: number;
    question4: number;
    question5: number;
    question6: number[];
    question7: number;
    question8: number;
    question9: number;
    question10: number[];
  }>>;
  userData: {
    name: string;
    email: string;
  };
  setUserData: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
  }>>;
}

const CoCreateAssessmentForm: React.FC<CoCreateAssessmentFormProps> = ({ step, answers, setAnswers, userData, setUserData }) => {
  const handleSingleChoice = (question: string, value: number) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const handleMultiChoice = (question: string, value: number) => {
    setAnswers(prev => {
      const current = prev[question as keyof typeof prev] as number[];
      if (current.includes(value)) {
        return {
          ...prev,
          [question]: current.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [question]: [...current, value]
        };
      }
    });
  };

  // Function to render a radio option with improved click handling
  const renderRadioOption = (id: string, value: string, label: string, name: string, currentValue: string) => {
    return (
      <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
        <RadioGroupItem id={id} value={value} />
        <Label htmlFor={id} className="cursor-pointer text-sm flex-grow">{label}</Label>
      </div>
    );
  };

  // Function to render a checkbox option with improved click handling
  const renderCheckboxOption = (id: string, question: string, value: number, label: string, isChecked: boolean) => {
    return (
      <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
        <Checkbox 
          id={id} 
          checked={isChecked} 
          onCheckedChange={() => handleMultiChoice(question, value)} 
        />
        <Label htmlFor={id} className="cursor-pointer text-sm flex-grow">{label}</Label>
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 0: // Step 1: Product Portfolio & Market Strategy
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-brand-600">Product Strategy</h2>
            
            <div className="space-y-5">
              {/* Question 1 */}
              <div>
                <p className="text-base font-medium mb-2">How would you describe your current offering portfolio?</p>
                <RadioGroup 
                  value={answers.question1.toString()}
                  onValueChange={(value) => handleSingleChoice('question1', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  {renderRadioOption("q1-opt1", "0", "Single unified product", "question1", answers.question1.toString())}
                  {renderRadioOption("q1-opt2", "2", "Multiple products for different segments", "question1", answers.question1.toString())}
                  {renderRadioOption("q1-opt3", "1", "Multiple offerings with overlapping value", "question1", answers.question1.toString())}
                  {renderRadioOption("q1-opt4", "3", "Legacy-heavy suite in need of rework", "question1", answers.question1.toString())}
                </RadioGroup>
              </div>
              
              {/* Question 2 */}
              <div>
                <p className="text-base font-medium mb-2">Are you currently exploring or planning any of the following?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {renderCheckboxOption(
                    "q2-opt1",
                    "question2", 
                    1,
                    "Launching a new product or sub-brand",
                    answers.question2.includes(1)
                  )}
                  
                  {renderCheckboxOption(
                    "q2-opt2",
                    "question2",
                    2,
                    "Repositioning an existing offering",
                    answers.question2.includes(2)
                  )}
                  
                  {renderCheckboxOption(
                    "q2-opt3",
                    "question2",
                    3,
                    "Entering a new customer segment",
                    answers.question2.includes(3)
                  )}
                  
                  {renderCheckboxOption(
                    "q2-opt4",
                    "question2",
                    4,
                    "Rationalizing or unbundling product lines",
                    answers.question2.includes(4)
                  )}
                  
                  {renderCheckboxOption(
                    "q2-opt5",
                    "question2",
                    0,
                    "None of the above",
                    answers.question2.includes(0)
                  )}
                </div>
              </div>
              
              {/* Question 3 & 4 */}
              <div>
                <p className="text-base font-medium mb-2">How well are your customer segments defined?</p>
                <RadioGroup 
                  value={answers.question3.toString()}
                  onValueChange={(value) => handleSingleChoice('question3', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  {renderRadioOption("q3-opt1", "0", "Not defined", "question3", answers.question3.toString())}
                  {renderRadioOption("q3-opt2", "1", "Partially defined", "question3", answers.question3.toString())}
                  {renderRadioOption("q3-opt3", "2", "Well defined with insights", "question3", answers.question3.toString())}
                  {renderRadioOption("q3-opt4", "3", "Continuously validated", "question3", answers.question3.toString())}
                </RadioGroup>
              </div>
              
              <div>
                <p className="text-base font-medium mb-2">How confident are you that your offerings meet specific customer needs?</p>
                <RadioGroup 
                  value={answers.question4.toString()}
                  onValueChange={(value) => handleSingleChoice('question4', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  {renderRadioOption("q4-opt1", "0", "Low", "question4", answers.question4.toString())}
                  {renderRadioOption("q4-opt2", "1", "Moderate", "question4", answers.question4.toString())}
                  {renderRadioOption("q4-opt3", "2", "High", "question4", answers.question4.toString())}
                  {renderRadioOption("q4-opt4", "3", "Proven with data", "question4", answers.question4.toString())}
                </RadioGroup>
              </div>
            </div>
          </div>
        );
      
      case 1: // Step 2: Innovation Process & Capabilities
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-brand-600">Innovation Process</h2>
            
            <div className="space-y-5">
              {/* Question 5 */}
              <div>
                <p className="text-base font-medium mb-2">How does your organization validate new ideas?</p>
                <RadioGroup 
                  value={answers.question5.toString()}
                  onValueChange={(value) => handleSingleChoice('question5', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  {renderRadioOption("q5-opt1", "0", "Intuition or internal input", "question5", answers.question5.toString())}
                  {renderRadioOption("q5-opt2", "1", "Occasional pilots/testing", "question5", answers.question5.toString())}
                  {renderRadioOption("q5-opt3", "2", "Structured discovery cycles", "question5", answers.question5.toString())}
                  {renderRadioOption("q5-opt4", "3", "Co-create with customers", "question5", answers.question5.toString())}
                </RadioGroup>
              </div>
              
              {/* Question 6 */}
              <div>
                <p className="text-base font-medium mb-2">What internal capabilities do you have to support innovation?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {renderCheckboxOption(
                    "q6-opt1",
                    "question6",
                    1,
                    "Research & insight",
                    answers.question6.includes(1)
                  )}
                  
                  {renderCheckboxOption(
                    "q6-opt2", 
                    "question6", 
                    2,
                    "Experience or service design",
                    answers.question6.includes(2)
                  )}
                  
                  {renderCheckboxOption(
                    "q6-opt3",
                    "question6",
                    3,
                    "Prototyping & testing",
                    answers.question6.includes(3)
                  )}
                  
                  {renderCheckboxOption(
                    "q6-opt4",
                    "question6",
                    4,
                    "Go-to-market readiness",
                    answers.question6.includes(4)
                  )}
                  
                  {renderCheckboxOption(
                    "q6-opt5",
                    "question6",
                    0,
                    "None",
                    answers.question6.includes(0)
                  )}
                </div>
              </div>
              
              {/* Question 7 & 8 */}
              <div>
                <p className="text-base font-medium mb-2">Are teams aligned on innovation goals and metrics?</p>
                <RadioGroup 
                  value={answers.question7.toString()}
                  onValueChange={(value) => handleSingleChoice('question7', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  {renderRadioOption("q7-opt1", "0", "Rarely", "question7", answers.question7.toString())}
                  {renderRadioOption("q7-opt2", "1", "Somewhat", "question7", answers.question7.toString())}
                  {renderRadioOption("q7-opt3", "2", "Mostly aligned", "question7", answers.question7.toString())}
                  {renderRadioOption("q7-opt4", "3", "Fully aligned", "question7", answers.question7.toString())}
                </RadioGroup>
              </div>
              
              <div>
                <p className="text-base font-medium mb-2">How easy is it for teams to move from idea to execution?</p>
                <RadioGroup 
                  value={answers.question8.toString()}
                  onValueChange={(value) => handleSingleChoice('question8', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  {renderRadioOption("q8-opt1", "0", "Difficult—lots of friction", "question8", answers.question8.toString())}
                  {renderRadioOption("q8-opt2", "1", "Slow, but manageable", "question8", answers.question8.toString())}
                  {renderRadioOption("q8-opt3", "2", "Efficient in defined tracks", "question8", answers.question8.toString())}
                  {renderRadioOption("q8-opt4", "3", "Agile and collaborative", "question8", answers.question8.toString())}
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 2: // Step 3: Collaboration & Your Information
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-brand-600">Collaboration & Information</h2>
            
            <div className="space-y-5">
              {/* Question 9 */}
              <div>
                <p className="text-base font-medium mb-2">How open is your organization to external collaboration?</p>
                <RadioGroup 
                  value={answers.question9.toString()}
                  onValueChange={(value) => handleSingleChoice('question9', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  {renderRadioOption("q9-opt1", "0", "We prefer to keep it in-house", "question9", answers.question9.toString())}
                  {renderRadioOption("q9-opt2", "1", "Open to short-term partners", "question9", answers.question9.toString())}
                  {renderRadioOption("q9-opt3", "2", "Seek co-creation partners", "question9", answers.question9.toString())}
                  {renderRadioOption("q9-opt4", "3", "Already work this way", "question9", answers.question9.toString())}
                </RadioGroup>
              </div>
              
              {/* Question 10 */}
              <div>
                <p className="text-base font-medium mb-2">What support would you value from a co-creation partner?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {renderCheckboxOption(
                    "q10-opt1",
                    "question10",
                    1,
                    "Strategy & discovery",
                    answers.question10.includes(1)
                  )}
                  
                  {renderCheckboxOption(
                    "q10-opt2",
                    "question10",
                    2,
                    "Experience design",
                    answers.question10.includes(2)
                  )}
                  
                  {renderCheckboxOption(
                    "q10-opt3",
                    "question10",
                    3,
                    "Prototyping & validation",
                    answers.question10.includes(3)
                  )}
                  
                  {renderCheckboxOption(
                    "q10-opt4",
                    "question10",
                    4,
                    "Market testing",
                    answers.question10.includes(4)
                  )}
                  
                  {renderCheckboxOption(
                    "q10-opt5",
                    "question10",
                    5,
                    "Launch planning",
                    answers.question10.includes(5)
                  )}
                  
                  {renderCheckboxOption(
                    "q10-opt6",
                    "question10",
                    6,
                    "Stakeholder alignment",
                    answers.question10.includes(6)
                  )}
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-4 pt-2">
                <h3 className="text-sm font-medium">Your Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={userData.name}
                      onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      value={userData.email}
                      onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-4 bg-beige-50 rounded-lg p-3">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-brand-400 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${((step + 1) / 3) * 100}%` }}
          ></div>
        </div>
        <p className="text-right mt-1 text-xs text-gray-600">Step {step + 1} of 3</p>
      </div>
      
      {renderStep()}
    </div>
  );
};

export default CoCreateAssessmentForm;
