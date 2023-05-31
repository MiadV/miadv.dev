import { useEffect, useState } from 'react';

const useSticky = (offset = 50) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (!isSticky && window.scrollY > offset) {
        setIsSticky(true);
      } else if (isSticky && window.scrollY <= offset) {
        setIsSticky(false);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isSticky, offset]);

  return isSticky;
};

export default useSticky;
