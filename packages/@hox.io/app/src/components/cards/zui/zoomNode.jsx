import React, {useContext} from 'react';
import Node from './node';
import {useAnimation} from '@hox.io/hooks';
import {i1D, i2D} from '../../../utils';
import {zuiContext} from './store';

const rootNodeScale = 1;
const rootNodeTranslate = [0, 0];

export default function ZoomNode({
  translate,
  scale,
  isReverse,
  ...props
}) {
  const {fire} = useContext(zuiContext);
  let completeAction;
  let translateTransition;
  let scaleTransition;

  if (isReverse) {
    completeAction = 'endZuiZoomOut';
    translateTransition = [rootNodeTranslate, translate];
    scaleTransition = [rootNodeScale, scale];
  } else {
    completeAction = 'endZuiZoomIn';
    translateTransition = [translate, rootNodeTranslate];
    scaleTransition = [scale, rootNodeScale];
  }

  const normal = useAnimation(
    'linear',
    250,
    0,
    () => fire(completeAction)
  );
  const iScale = i1D(...scaleTransition);
  const iTranslate = i2D(...translateTransition);

  return (
    <Node
      {...props}
      scale={iScale(normal)}
      translate={iTranslate(normal)}
    />
  );
}