import {useLayoutEffect, useState} from 'react';

export default function usePath() {
  const [length, setLength] = useState(0);
  const [node, setRef] = useState(null);

  useLayoutEffect(
    () => {
      if (node !== null) {
        const segments = node.attributes.d.value.split(/(?=[mM])/);
        const path = document.createElementNS('http://www.w3.org/2000/svg','path');
        let max = 0;

        for (let d of segments) {
          path.setAttributeNS(null, 'd', d);
          document.body.appendChild(path);
          max = Math.max(max, path.getTotalLength());
        }
        
        setLength(max);
      }
    },
    [node]
  );

  return { length, ref: setRef };
}