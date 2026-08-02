import React from 'react';

interface ClutchBadgeProps {
  /** Rendered width/height of the square badge in px. Defaults to 360. */
  size?: number;
  className?: string;
}

const CLUTCH_BADGE_SRC =
  'https://clutch.co/share/badges/2418837/7658?utm_source=clutch_top_company_badge&utm_medium=image_embed';

const ClutchBadge: React.FC<ClutchBadgeProps> = ({ size = 360, className = '' }) => {
  return (
    <div className={className} style={{ width: size, height: size, maxWidth: '100%' }}>
      <iframe
        src={CLUTCH_BADGE_SRC}
        title="Top Clutch Product Design Company Leicester 2026"
        width={size}
        height={size}
        loading="lazy"
        style={{ border: 0, width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default ClutchBadge;
