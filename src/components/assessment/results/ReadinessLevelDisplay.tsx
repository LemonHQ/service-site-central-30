
import React from 'react';
import { Award, Check, Star } from 'lucide-react';
import { ReadinessLevel } from './utils';

interface ReadinessLevelDisplayProps {
  readiness: ReadinessLevel;
  scorePercentage: number;
}

const ReadinessLevelDisplay: React.FC<ReadinessLevelDisplayProps> = ({ readiness, scorePercentage }) => {
  const renderIcon = () => {
    switch (readiness.icon) {
      case 'award':
        return <Award className={`h-10 w-10 ${readiness.iconColor}`} />;
      case 'star':
        return <Star className={`h-10 w-10 ${readiness.iconColor}`} />;
      case 'check':
        return <Check className={`h-10 w-10 ${readiness.iconColor}`} />;
      default:
        return <Check className={`h-10 w-10 ${readiness.iconColor}`} />;
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Your Readiness Score</h2>
        <div className="flex items-center space-x-2">
          {renderIcon()}
          <span className={`text-lg font-bold ${readiness.color}`}>{readiness.level}</span>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div 
          className={`h-4 rounded-full transition-all duration-1000 ${
            scorePercentage >= 75 ? "bg-green-500" : 
            scorePercentage >= 50 ? "bg-yellow-500" : 
            scorePercentage >= 25 ? "bg-orange-500" : "bg-red-500"
          }`}
          style={{ width: `${scorePercentage}%` }}
        ></div>
      </div>
      
      <h3 className="text-xl font-semibold mb-2">Your Co-Creation Journey Stage:</h3>
      <div className={`p-4 rounded-lg border ${
        scorePercentage >= 75 ? "border-green-200 bg-green-50" : 
        scorePercentage >= 50 ? "border-yellow-200 bg-yellow-50" : 
        scorePercentage >= 25 ? "border-orange-200 bg-orange-50" : "border-red-200 bg-red-50"
      }`}>
        <h4 className={`font-semibold text-lg mb-1 ${readiness.color}`}>{readiness.stage}</h4>
        <p className="text-gray-700">{readiness.stageDesc}</p>
      </div>
    </>
  );
};

export default ReadinessLevelDisplay;
