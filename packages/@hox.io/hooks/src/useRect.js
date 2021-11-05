import {useLayoutEffect, useState} from 'react';

// Yes getRect... You know you should on occasion.
function getRect(node) {
  const rect = node.getBoundingClientRect();
  const offsetX = window.pageXOffset || window.scrollX;
  const offsetY = window.pageYOffset || window.scrollY;
  
  return {
    top: rect.top + offsetY,
    right: rect.left + offsetX,
    bottom: rect.bottom + offsetY,
    left: rect.left + offsetX,
    width: rect.width,
    height: rect.height,
  }
}

const initialState = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0,
};

export default function useRect() {
  const [rect, setRect] = useState(initialState);
  const [node, setRef] = useState(null);

  useLayoutEffect(
    () => {
      if (node !== null) {
        let isActive = false;

        function resizeHandler() {
          if (!isActive) {
            window.requestAnimationFrame(() => {
              setRect(getRect(node));

              isActive = false;
            });

            isActive = true;
          }
        }

        window.addEventListener('resize', resizeHandler);

        setRect(getRect(node));

        return () => {
          window.removeEventListener('resize', resizeHandler);
        }
      }
    },
    [node]
  );

  return { rect, ref: setRef };
}