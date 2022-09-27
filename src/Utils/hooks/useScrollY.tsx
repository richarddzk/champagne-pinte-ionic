import { useLayoutEffect, useRef, useState } from 'react';

const useScrollY = ({ init }: any) => {
  const [scrollY, setScrollY] = useState(init);

  const ref = useRef(null);

  useLayoutEffect(() => {
    const updateScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return { ref, scrollY, setScrollY };
};
export default useScrollY;
