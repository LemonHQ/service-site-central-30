
import React from 'react';
import { Paragraph } from '@/components/ui/Typography';

const Copyright: React.FC = () => {
  return (
    <div className="text-center text-gray-600">
      <Paragraph className="mb-3 text-sm text-center">
        © 2026 LemonHQ. All rights reserved
      </Paragraph>
      <Paragraph className="mb-0 text-sm text-center">
        England & Wales registered company number 14313332 at 128 City Road, London, England, EC1V 2NX
      </Paragraph>
    </div>
  );
};

export default Copyright;
