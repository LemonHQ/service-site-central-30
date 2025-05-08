
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LocationInfoProps {
  title: string;
  addressLines: string[];
  mapUrl: string;
}

const LocationInfo: React.FC<LocationInfoProps> = ({ title, addressLines, mapUrl }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2 text-brand-600">{title}</h4>
      {addressLines.map((line, index) => (
        <p key={index} className="text-gray-600">{line}</p>
      ))}
      <div className="mt-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2 border-brand-400 text-brand-500 hover:bg-brand-100"
          onClick={() => window.open(mapUrl, "_blank")}
        >
          <MapPin size={16} />
          Get Directions
        </Button>
      </div>
    </div>
  );
};

export default LocationInfo;
