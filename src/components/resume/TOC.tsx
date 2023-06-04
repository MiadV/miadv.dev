import { useMemo } from 'react';
import clsx from 'clsx';
import useActiveItem from '@/hooks/useActiveItem';

const StickyTOC = ({
  className,
  showBackToTop,
  toc,
}: {
  className?: string;
  showBackToTop: boolean;
  toc: Record<
    string,
    {
      label: string;
    }
  >;
}) => {
  const sectionIds = useMemo(() => Object.keys(toc), [toc]);
  const { activeId, setActiveId } = useActiveItem(
    sectionIds,
    '-20% 0% -60% 0%'
  );

  return (
    <nav className={clsx(className)}>
      <div className="text-sm font-medium">On this page</div>
      <ul className="space-y-2 border-b py-4 dark:border-gray-500">
        {sectionIds.map((id) => (
          <li
            key={id}
            className={clsx(
              'text-sm transition-all hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400',
              activeId === id ? 'font-medium text-indigo-500' : 'text-gray-400'
            )}
            onClick={() => setActiveId(id)}
          >
            <a href={`#${id}`}>{toc[id].label}</a>
          </li>
        ))}
      </ul>

      {showBackToTop && (
        <a
          href="#top"
          className="mt-4 inline-flex items-center gap-2 text-sm transition-all hover:font-medium hover:text-indigo-500"
        >
          <svg
            fill="none"
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="h-3 w-3"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M16 12l-4-4-4 4"></path>
            <path d="M12 16V8"></path>
          </svg>
          Scroll to top
        </a>
      )}
    </nav>
  );
};

export default StickyTOC;
