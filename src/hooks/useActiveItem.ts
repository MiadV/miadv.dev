import React from 'react';

function useActiveItem(
  itemIds: string[],

  /**
   * example: 40% 0% -80% 0%
   */
  rootMargin?: string
) {
  const [activeId, setActiveId] = React.useState<string>('');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: rootMargin }
    );

    itemIds?.forEach((id) => {
      if (!id) {
        return;
      }

      const element = document?.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return;
        }

        const element = document?.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds, rootMargin]);

  return { activeId, setActiveId };
}

export default useActiveItem;
