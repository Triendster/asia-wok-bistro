import { useState, useEffect } from 'react';

function getScrollPosition() {
  const scrollY = window.scrollY;
  return scrollY
}

export default function useScrollPosition() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPos(getScrollPosition());
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPos;
}
