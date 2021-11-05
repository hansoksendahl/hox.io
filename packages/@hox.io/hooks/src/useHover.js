import {useLayoutEffect, useState} from 'react';

export default function useHover() {
  const [pos, setPos] = useState({x: 0, y: 0});
  const [node, setRef] = useState(null);

  useLayoutEffect(
    () => {
      if (node !== null) {
        let isActive = false;

        function moveHandler({clientX: x, clientY: y}) {
          if (!isActive) {
            window.requestAnimationFrame(() => {
              setPos({x, y});

              isActive = false;
            });

            isActive = true;
          }
        }

        node.addEventListener('mousemove', moveHandler);

        return () => {
          node.removeEventListener('mousemove', moveHandler);
        }
      }
    },
    [node]
  );

  return {pos, ref: setRef};
}