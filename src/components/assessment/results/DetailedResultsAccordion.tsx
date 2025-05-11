
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface DetailedResult {
  question: string;
  score: number;
  maxScore: number;
  feedback: string;
}

interface DetailedResultsAccordionProps {
  score: number;
  maxTotalScore: number;
  detailedResults: DetailedResult[];
  isAccordionOpen: boolean;
  setIsAccordionOpen: (isOpen: boolean) => void;
}

const DetailedResultsAccordion: React.FC<DetailedResultsAccordionProps> = ({
  score,
  maxTotalScore,
  detailedResults,
  isAccordionOpen,
  setIsAccordionOpen
}) => {
  return (
    <Accordion 
      type="single" 
      collapsible 
      className="mb-4" 
      value={isAccordionOpen ? "score-details" : ""} 
      onValueChange={(val) => setIsAccordionOpen(!!val)}
    >
      <AccordionItem value="score-details" className="border-none">
        <div className="flex items-end cursor-pointer" onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
          <span className={`text-5xl font-bold ${
            (score / maxTotalScore) * 100 >= 75 ? "text-green-600" : 
            (score / maxTotalScore) * 100 >= 50 ? "text-yellow-600" : 
            (score / maxTotalScore) * 100 >= 25 ? "text-orange-500" : "text-red-500"
          }`}>{score}</span>
          <span className="text-gray-500 ml-2 mb-1">/ {maxTotalScore}</span>
          <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`} />
        </div>
        <AccordionContent>
          <div className="space-y-6 mt-4">
            {detailedResults.map((result, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-lg">{result.question}</h3>
                  <div>
                    <span className={`font-semibold ${
                      result.score/result.maxScore >= 0.7 ? "text-green-600" : 
                      result.score/result.maxScore >= 0.4 ? "text-yellow-600" : 
                      "text-orange-500"
                    }`}>{result.score}</span>
                    <span className="text-gray-500">/{result.maxScore}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full ${
                      result.score/result.maxScore >= 0.7 ? "bg-green-500" : 
                      result.score/result.maxScore >= 0.4 ? "bg-yellow-500" : 
                      "bg-orange-500"
                    }`}
                    style={{ width: `${(result.score / result.maxScore) * 100}%` }}
                  ></div>
                </div>
                <p className="text-gray-600">{result.feedback}</p>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DetailedResultsAccordion;
