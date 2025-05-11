
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

  const renderStep = () => {
    switch (step) {
      case 0: // Step 1: Product Portfolio & Market Strategy
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-brand-600">Product Portfolio & Market Strategy</h2>
            
            <div className="space-y-6">
              {/* Question 1 */}
              <div>
                <p className="text-sm font-medium mb-2">How would you describe your current offering portfolio?</p>
                <RadioGroup 
                  value={answers.question1.toString()}
                  onValueChange={(value) => handleSingleChoice('question1', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q1-opt1" value="0" />
                    <Label htmlFor="q1-opt1" className="cursor-pointer text-sm">Single unified product</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q1-opt2" value="2" />
                    <Label htmlFor="q1-opt2" className="cursor-pointer text-sm">Multiple products for different segments</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q1-opt3" value="1" />
                    <Label htmlFor="q1-opt3" className="cursor-pointer text-sm">Multiple offerings with overlapping value</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q1-opt4" value="3" />
                    <Label htmlFor="q1-opt4" className="cursor-pointer text-sm">Legacy-heavy suite in need of rework</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Question 2 */}
              <div>
                <p className="text-sm font-medium mb-2">Are you currently exploring or planning any of the following? (Select all that apply)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q2-opt1" 
                      checked={answers.question2.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question2', 1)}
                    />
                    <Label htmlFor="q2-opt1" className="cursor-pointer text-sm">Launching a new product or sub-brand</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q2-opt2" 
                      checked={answers.question2.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question2', 1)}
                    />
                    <Label htmlFor="q2-opt2" className="cursor-pointer text-sm">Repositioning an existing offering</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q2-opt3" 
                      checked={answers.question2.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question2', 1)}
                    />
                    <Label htmlFor="q2-opt3" className="cursor-pointer text-sm">Entering a new customer segment</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q2-opt4" 
                      checked={answers.question2.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question2', 1)}
                    />
                    <Label htmlFor="q2-opt4" className="cursor-pointer text-sm">Rationalizing or unbundling product lines</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q2-opt5" 
                      checked={answers.question2.includes(0)} 
                      onCheckedChange={() => handleMultiChoice('question2', 0)}
                    />
                    <Label htmlFor="q2-opt5" className="cursor-pointer text-sm">None of the above</Label>
                  </div>
                </div>
              </div>
              
              {/* Question 3 */}
              <div>
                <p className="text-sm font-medium mb-2">How well are your customer segments defined?</p>
                <RadioGroup 
                  value={answers.question3.toString()}
                  onValueChange={(value) => handleSingleChoice('question3', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q3-opt1" value="0" />
                    <Label htmlFor="q3-opt1" className="cursor-pointer text-sm">Not defined</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q3-opt2" value="1" />
                    <Label htmlFor="q3-opt2" className="cursor-pointer text-sm">Partially defined</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q3-opt3" value="2" />
                    <Label htmlFor="q3-opt3" className="cursor-pointer text-sm">Well defined with insights</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q3-opt4" value="3" />
                    <Label htmlFor="q3-opt4" className="cursor-pointer text-sm">Continuously validated</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Question 4 */}
              <div>
                <p className="text-sm font-medium mb-2">How confident are you that your offerings meet specific customer needs?</p>
                <RadioGroup 
                  value={answers.question4.toString()}
                  onValueChange={(value) => handleSingleChoice('question4', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q4-opt1" value="0" />
                    <Label htmlFor="q4-opt1" className="cursor-pointer text-sm">Low</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q4-opt2" value="1" />
                    <Label htmlFor="q4-opt2" className="cursor-pointer text-sm">Moderate</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q4-opt3" value="2" />
                    <Label htmlFor="q4-opt3" className="cursor-pointer text-sm">High</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q4-opt4" value="3" />
                    <Label htmlFor="q4-opt4" className="cursor-pointer text-sm">Proven with data</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );
      
      case 1: // Step 2: Innovation Process & Capabilities
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-brand-600">Innovation Process & Capabilities</h2>
            
            <div className="space-y-6">
              {/* Question 5 */}
              <div>
                <p className="text-sm font-medium mb-2">How does your organization validate new ideas before launch?</p>
                <RadioGroup 
                  value={answers.question5.toString()}
                  onValueChange={(value) => handleSingleChoice('question5', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q5-opt1" value="0" />
                    <Label htmlFor="q5-opt1" className="cursor-pointer text-sm">Intuition or internal input</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q5-opt2" value="1" />
                    <Label htmlFor="q5-opt2" className="cursor-pointer text-sm">Occasional pilots/testing</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q5-opt3" value="2" />
                    <Label htmlFor="q5-opt3" className="cursor-pointer text-sm">Structured discovery cycles</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q5-opt4" value="3" />
                    <Label htmlFor="q5-opt4" className="cursor-pointer text-sm">Co-create with customers</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Question 6 */}
              <div>
                <p className="text-sm font-medium mb-2">What internal capabilities do you have to support innovation? (Select all that apply)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q6-opt1" 
                      checked={answers.question6.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question6', 1)}
                    />
                    <Label htmlFor="q6-opt1" className="cursor-pointer text-sm">Research & insight</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q6-opt2" 
                      checked={answers.question6.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question6', 1)}
                    />
                    <Label htmlFor="q6-opt2" className="cursor-pointer text-sm">Experience or service design</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q6-opt3" 
                      checked={answers.question6.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question6', 1)}
                    />
                    <Label htmlFor="q6-opt3" className="cursor-pointer text-sm">Prototyping & testing</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q6-opt4" 
                      checked={answers.question6.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question6', 1)}
                    />
                    <Label htmlFor="q6-opt4" className="cursor-pointer text-sm">Go-to-market readiness</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q6-opt5" 
                      checked={answers.question6.includes(0)} 
                      onCheckedChange={() => handleMultiChoice('question6', 0)}
                    />
                    <Label htmlFor="q6-opt5" className="cursor-pointer text-sm">None</Label>
                  </div>
                </div>
              </div>
              
              {/* Question 7 */}
              <div>
                <p className="text-sm font-medium mb-2">Are teams aligned on innovation goals and metrics?</p>
                <RadioGroup 
                  value={answers.question7.toString()}
                  onValueChange={(value) => handleSingleChoice('question7', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q7-opt1" value="0" />
                    <Label htmlFor="q7-opt1" className="cursor-pointer text-sm">Rarely</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q7-opt2" value="1" />
                    <Label htmlFor="q7-opt2" className="cursor-pointer text-sm">Somewhat</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q7-opt3" value="2" />
                    <Label htmlFor="q7-opt3" className="cursor-pointer text-sm">Mostly aligned</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q7-opt4" value="3" />
                    <Label htmlFor="q7-opt4" className="cursor-pointer text-sm">Fully aligned</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Question 8 */}
              <div>
                <p className="text-sm font-medium mb-2">How easy is it for teams to move from idea to execution?</p>
                <RadioGroup 
                  value={answers.question8.toString()}
                  onValueChange={(value) => handleSingleChoice('question8', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q8-opt1" value="0" />
                    <Label htmlFor="q8-opt1" className="cursor-pointer text-sm">Difficult—lots of friction</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q8-opt2" value="1" />
                    <Label htmlFor="q8-opt2" className="cursor-pointer text-sm">Slow, but manageable</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q8-opt3" value="2" />
                    <Label htmlFor="q8-opt3" className="cursor-pointer text-sm">Efficient in defined tracks</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q8-opt4" value="3" />
                    <Label htmlFor="q8-opt4" className="cursor-pointer text-sm">Agile and collaborative</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 2: // Step 3: Collaboration & Your Information
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-brand-600">Collaboration & Your Information</h2>
            
            <div className="space-y-6">
              {/* Question 9 */}
              <div>
                <p className="text-sm font-medium mb-2">How open is your organization to external collaboration?</p>
                <RadioGroup 
                  value={answers.question9.toString()}
                  onValueChange={(value) => handleSingleChoice('question9', parseInt(value))}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                >
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q9-opt1" value="0" />
                    <Label htmlFor="q9-opt1" className="cursor-pointer text-sm">We prefer to keep it in-house</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q9-opt2" value="1" />
                    <Label htmlFor="q9-opt2" className="cursor-pointer text-sm">Open to short-term partners</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q9-opt3" value="2" />
                    <Label htmlFor="q9-opt3" className="cursor-pointer text-sm">Seek co-creation partners</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <RadioGroupItem id="q9-opt4" value="3" />
                    <Label htmlFor="q9-opt4" className="cursor-pointer text-sm">Already work this way</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Question 10 */}
              <div>
                <p className="text-sm font-medium mb-2">What support would you value from a co-creation partner? (Select all that apply)</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q10-opt1" 
                      checked={answers.question10.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question10', 1)}
                    />
                    <Label htmlFor="q10-opt1" className="cursor-pointer text-sm">Strategy & discovery</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q10-opt2" 
                      checked={answers.question10.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question10', 1)}
                    />
                    <Label htmlFor="q10-opt2" className="cursor-pointer text-sm">Experience design</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q10-opt3" 
                      checked={answers.question10.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question10', 1)}
                    />
                    <Label htmlFor="q10-opt3" className="cursor-pointer text-sm">Prototyping & validation</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q10-opt4" 
                      checked={answers.question10.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question10', 1)}
                    />
                    <Label htmlFor="q10-opt4" className="cursor-pointer text-sm">Market testing</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q10-opt5" 
                      checked={answers.question10.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question10', 1)}
                    />
                    <Label htmlFor="q10-opt5" className="cursor-pointer text-sm">Launch planning</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50 cursor-pointer">
                    <Checkbox 
                      id="q10-opt6" 
                      checked={answers.question10.includes(1)} 
                      onCheckedChange={() => handleMultiChoice('question10', 1)}
                    />
                    <Label htmlFor="q10-opt6" className="cursor-pointer text-sm">Stakeholder alignment</Label>
                  </div>
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
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
        <p className="text-right mt-1 text-xs text-gray-600">Step {step + 1} of 3</p>
      </div>
      
      {renderStep()}
    </div>
  );
};

export default CoCreateAssessmentForm;
