import {useEffect, useState} from 'react';

export default function useScroll() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let isActive = false;

    function scrollHandler() {
      if (!isActive) {
        window.requestAnimationFrame(() => {
          setPos({
            x: (window.pageXOffset || window.scrollX),
            y: (window.pageYOffset || window.scrollY)
          });
          isActive = false;
        });

        isActive = true;
      }
    }

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  });

  return pos;
}