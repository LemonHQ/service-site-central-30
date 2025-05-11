
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import SelectableBox from "@/components/lead-qualification/SelectableBox";

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

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-600">How would you describe your current offering portfolio?</h2>
            <div className="space-y-4">
              <SelectableBox
                id="q1-option1"
                label="Single unified product"
                selected={answers.question1 === 0}
                onClick={() => handleSingleChoice('question1', 0)}
              />
              <SelectableBox
                id="q1-option2"
                label="Multiple products for different segments"
                selected={answers.question1 === 2}
                onClick={() => handleSingleChoice('question1', 2)}
              />
              <SelectableBox
                id="q1-option3"
                label="Multiple offerings with overlapping value"
                selected={answers.question1 === 1}
                onClick={() => handleSingleChoice('question1', 1)}
              />
              <SelectableBox
                id="q1-option4"
                label="Legacy-heavy suite in need of rework"
                selected={answers.question1 === 3}
                onClick={() => handleSingleChoice('question1', 3)}
              />
            </div>
          </div>
        );
      
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-600">Are you currently exploring or planning any of the following?</h2>
            <p className="text-gray-600 mb-4">(Select all that apply)</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q2-option1" 
                  checked={answers.question2.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question2', 1)}
                />
                <Label htmlFor="q2-option1" className="text-base font-normal cursor-pointer">Launching a new product or sub-brand</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q2-option2" 
                  checked={answers.question2.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question2', 1)}
                />
                <Label htmlFor="q2-option2" className="text-base font-normal cursor-pointer">Repositioning an existing offering</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q2-option3" 
                  checked={answers.question2.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question2', 1)}
                />
                <Label htmlFor="q2-option3" className="text-base font-normal cursor-pointer">Entering a new customer segment or market</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q2-option4" 
                  checked={answers.question2.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question2', 1)}
                />
                <Label htmlFor="q2-option4" className="text-base font-normal cursor-pointer">Rationalizing or unbundling product lines</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q2-option5" 
                  checked={answers.question2.includes(0)} 
                  onCheckedChange={() => handleMultiChoice('question2', 0)}
                />
                <Label htmlFor="q2-option5" className="text-base font-normal cursor-pointer">None of the above</Label>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-600">How well are your customer segments defined across product lines?</h2>
            <div className="space-y-4">
              <SelectableBox
                id="q3-option1"
                label="Not defined"
                selected={answers.question3 === 0}
                onClick={() => handleSingleChoice('question3', 0)}
              />
              <SelectableBox
                id="q3-option2"
                label="Partially defined (basic personas or market groups)"
                selected={answers.question3 === 1}
                onClick={() => handleSingleChoice('question3', 1)}
              />
              <SelectableBox
                id="q3-option3"
                label="Well defined with behavioral or industry insights"
                selected={answers.question3 === 2}
                onClick={() => handleSingleChoice('question3', 2)}
              />
              <SelectableBox
                id="q3-option4"
                label="Continuously validated and data-backed"
                selected={answers.question3 === 3}
                onClick={() => handleSingleChoice('question3', 3)}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-600">How confident are you that your current offerings meet the specific needs of different customer segments?</h2>
            <div className="space-y-4">
              <SelectableBox
                id="q4-option1"
                label="Low"
                selected={answers.question4 === 0}
                onClick={() => handleSingleChoice('question4', 0)}
              />
              <SelectableBox
                id="q4-option2"
                label="Moderate"
                selected={answers.question4 === 1}
                onClick={() => handleSingleChoice('question4', 1)}
              />
              <SelectableBox
                id="q4-option3"
                label="High"
                selected={answers.question4 === 2}
                onClick={() => handleSingleChoice('question4', 2)}
              />
              <SelectableBox
                id="q4-option4"
                label="Proven with usage, feedback, or conversion data"
                selected={answers.question4 === 3}
                onClick={() => handleSingleChoice('question4', 3)}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-600">How does your organization validate new ideas before launch?</h2>
            <div className="space-y-4">
              <SelectableBox
                id="q5-option1"
                label="We rely on intuition or internal input"
                selected={answers.question5 === 0}
                onClick={() => handleSingleChoice('question5', 0)}
              />
              <SelectableBox
                id="q5-option2"
                label="We run occasional pilots or internal testing"
                selected={answers.question5 === 1}
                onClick={() => handleSingleChoice('question5', 1)}
              />
              <SelectableBox
                id="q5-option3"
                label="We run structured discovery and testing cycles"
                selected={answers.question5 === 2}
                onClick={() => handleSingleChoice('question5', 2)}
              />
              <SelectableBox
                id="q5-option4"
                label="We co-create with customers and business teams"
                selected={answers.question5 === 3}
                onClick={() => handleSingleChoice('question5', 3)}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-600">What internal capabilities do you have to support innovation?</h2>
            <p className="text-gray-600 mb-4">(Select all that apply)</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q6-option1" 
                  checked={answers.question6.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question6', 1)}
                />
                <Label htmlFor="q6-option1" className="text-base font-normal cursor-pointer">Research & insight</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q6-option2" 
                  checked={answers.question6.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question6', 1)}
                />
                <Label htmlFor="q6-option2" className="text-base font-normal cursor-pointer">Experience or service design</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q6-option3" 
                  checked={answers.question6.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question6', 1)}
                />
                <Label htmlFor="q6-option3" className="text-base font-normal cursor-pointer">Prototyping & testing</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q6-option4" 
                  checked={answers.question6.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question6', 1)}
                />
                <Label htmlFor="q6-option4" className="text-base font-normal cursor-pointer">Go-to-market readiness</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q6-option5" 
                  checked={answers.question6.includes(0)} 
                  onCheckedChange={() => handleMultiChoice('question6', 0)}
                />
                <Label htmlFor="q6-option5" className="text-base font-normal cursor-pointer">None</Label>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-600">Are business, product, brand, and digital teams aligned on innovation goals and success metrics?</h2>
            <div className="space-y-4">
              <SelectableBox
                id="q7-option1"
                label="Rarely"
                selected={answers.question7 === 0}
                onClick={() => handleSingleChoice('question7', 0)}
              />
              <SelectableBox
                id="q7-option2"
                label="Somewhat"
                selected={answers.question7 === 1}
                onClick={() => handleSingleChoice('question7', 1)}
              />
              <SelectableBox
                id="q7-option3"
                label="Mostly aligned"
                selected={answers.question7 === 2}
                onClick={() => handleSingleChoice('question7', 2)}
              />
              <SelectableBox
                id="q7-option4"
                label="Fully aligned with shared frameworks"
                selected={answers.question7 === 3}
                onClick={() => handleSingleChoice('question7', 3)}
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-600">How easy is it for cross-functional teams to move from idea to execution?</h2>
            <div className="space-y-4">
              <SelectableBox
                id="q8-option1"
                label="Difficult—lots of handoffs and friction"
                selected={answers.question8 === 0}
                onClick={() => handleSingleChoice('question8', 0)}
              />
              <SelectableBox
                id="q8-option2"
                label="Slow, but manageable"
                selected={answers.question8 === 1}
                onClick={() => handleSingleChoice('question8', 1)}
              />
              <SelectableBox
                id="q8-option3"
                label="Efficient in defined tracks"
                selected={answers.question8 === 2}
                onClick={() => handleSingleChoice('question8', 2)}
              />
              <SelectableBox
                id="q8-option4"
                label="Agile and collaborative"
                selected={answers.question8 === 3}
                onClick={() => handleSingleChoice('question8', 3)}
              />
            </div>
          </div>
        );

      case 8:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-600">How open is your organization to external collaboration for experience and product innovation?</h2>
            <div className="space-y-4">
              <SelectableBox
                id="q9-option1"
                label="We prefer to keep it in-house"
                selected={answers.question9 === 0}
                onClick={() => handleSingleChoice('question9', 0)}
              />
              <SelectableBox
                id="q9-option2"
                label="Open to short-term partners"
                selected={answers.question9 === 1}
                onClick={() => handleSingleChoice('question9', 1)}
              />
              <SelectableBox
                id="q9-option3"
                label="Actively seek strategic co-creation partners"
                selected={answers.question9 === 2}
                onClick={() => handleSingleChoice('question9', 2)}
              />
              <SelectableBox
                id="q9-option4"
                label="Already work this way across teams"
                selected={answers.question9 === 3}
                onClick={() => handleSingleChoice('question9', 3)}
              />
            </div>
          </div>
        );

      case 9:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-600">What support would you most value from a co-creation partner?</h2>
            <p className="text-gray-600 mb-4">(Select all that apply)</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q10-option1" 
                  checked={answers.question10.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question10', 1)}
                />
                <Label htmlFor="q10-option1" className="text-base font-normal cursor-pointer">Strategy & discovery</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q10-option2" 
                  checked={answers.question10.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question10', 1)}
                />
                <Label htmlFor="q10-option2" className="text-base font-normal cursor-pointer">Experience design</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q10-option3" 
                  checked={answers.question10.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question10', 1)}
                />
                <Label htmlFor="q10-option3" className="text-base font-normal cursor-pointer">Prototyping & validation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q10-option4" 
                  checked={answers.question10.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question10', 1)}
                />
                <Label htmlFor="q10-option4" className="text-base font-normal cursor-pointer">Market testing</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q10-option5" 
                  checked={answers.question10.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question10', 1)}
                />
                <Label htmlFor="q10-option5" className="text-base font-normal cursor-pointer">Launch planning</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="q10-option6" 
                  checked={answers.question10.includes(1)} 
                  onCheckedChange={() => handleMultiChoice('question10', 1)}
                />
                <Label htmlFor="q10-option6" className="text-base font-normal cursor-pointer">Stakeholder alignment</Label>
              </div>
            </div>
          </div>
        );

      case 10:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-brand-600">Your Information</h2>
            <p className="text-gray-600 mb-6">Please provide your information to receive your assessment results.</p>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={userData.name}
                  onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={userData.email}
                  onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                />
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
      <div className="mb-8 bg-beige-50 rounded-lg p-3">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-brand-400 h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${(step / 10) * 100}%` }}
          ></div>
        </div>
        <p className="text-right mt-2 text-sm text-gray-600">Step {step + 1} of 11</p>
      </div>
      
      {renderStep()}
    </div>
  );
};

export default CoCreateAssessmentForm;
