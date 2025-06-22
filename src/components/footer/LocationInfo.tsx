
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { H4, Paragraph } from '@/components/ui/Typography';

interface LocationInfoProps {
  title: string;
  addressLines: string[];
  mapUrl: string;
}

const LocationInfo: React.FC<LocationInfoProps> = ({ title, addressLines, mapUrl }) => {
  return (
    <div>
      <H4 className="mb-2 text-brand-600">{title}</H4>
      {addressLines.map((line, index) => (
        <Paragraph key={index} className="mb-0 text-gray-600">{line}</Paragraph>
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
