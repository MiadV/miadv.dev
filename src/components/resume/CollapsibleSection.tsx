import clsx from 'clsx';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

type CollapsibleSectionProps = {
  className?: string;
  children: ReactNode;
};

let maxHeight = 170;
let offset = 60;

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  className,
  children,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(true);
  const [contentHeight, setContentHeight] = useState(offset);
  const isCollapsible = contentHeight > maxHeight;
  const collapsedHeight =
    maxHeight > contentHeight ? contentHeight - offset : maxHeight;

  useEffect(() => {
    if (!sectionRef.current) return;
    setContentHeight(sectionRef.current?.clientHeight + offset);
  }, []);

  return (
    <section
      className={clsx(
        'relative overflow-y-hidden rounded-xl transition-all duration-300',
        className
      )}
      style={{
        maxHeight: collapsed ? collapsedHeight : contentHeight,
        height: collapsed ? maxHeight : contentHeight,
      }}
    >
      <div ref={sectionRef}>{children}</div>

      {isCollapsible && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-50 from-60% to-gray-50/0 pt-8 dark:from-gray-900 dark:to-gray-900/0">
          <button
            className="mx-auto flex items-center rounded-full bg-indigo-50 px-3 py-2 text-xs font-medium text-indigo-500 dark:bg-indigo-800 dark:text-white"
            onClick={() => setCollapsed(!collapsed)}
          >
            <span>Read {collapsed ? 'more' : 'less'}</span>
          </button>
        </div>
      )}
    </section>
  );
};

export default CollapsibleSection;
