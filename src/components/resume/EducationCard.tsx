import React from 'react';

type EducationCardProps = {
  uni: string;
  field: string;
  timePeriod: string;
  location: string;
};

const EducationCard: React.FC<EducationCardProps> = ({
  uni,
  field,
  timePeriod,
  location,
}) => {
  return (
    <div className="flex flex-col justify-between md:flex-row">
      <div className="flex flex-col items-center md:flex-row">
        <div className="text-center md:mt-0 md:text-left">
          <span className="block text-lg font-bold">{field}</span>
          <span className="block text-sm font-semibold">{uni}</span>
        </div>
      </div>
      <div className="mt-2 flex justify-center gap-4 md:mt-0 md:flex-col md:gap-0">
        <span className="mb-1 block text-xs font-semibold">{timePeriod}</span>
        <span className="mb-1 block text-xs">{location}</span>
      </div>
    </div>
  );
};

export default EducationCard;
