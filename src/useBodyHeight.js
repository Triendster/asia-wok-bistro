import { useState, useEffect } from 'react';

function getBodyHeight() {
  const bodyHeight = document.body.getBoundingClientRect().height;
  return bodyHeight;
}

export default function useBodyHeight() {
  const [height, setHeight] = useState(getBodyHeight());

  useEffect(() => {
    function handleResize() {
      setHeight(getBodyHeight());
    }

    window.addEventListener('scroll', handleResize);
    return () => window.removeEventListener('scroll', handleResize);
  }, []);

  useEffect(() => {
    function handleResize() {
      setHeight(getBodyHeight());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return height;
}
