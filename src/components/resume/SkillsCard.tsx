import React from 'react';

type SkillsCardProps = {
  title: string;
  skills: string[];
};

const SkillsCard: React.FC<SkillsCardProps> = ({ title, skills }) => {
  return (
    <div>
      <h4 className="font-medium">{title}</h4>
      <ul className="mt-1 flex flex-wrap items-center gap-2 text-sm">
        {skills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
