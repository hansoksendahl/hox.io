import React, {useContext, useState} from 'react';
import {Icon} from '@hox.io/components';
import {zuiContext} from './store';
import getHues from './helpers/getHues';
import posMod from '../../../utils/posMod';
import getNodes from './db/node/getNodes';

const hues = getHues(200, 20);
const tran = 0.1464466094067262;

export default function Node(props) {
  const {
    datum,
    hueIndex = 0,
    scale = 1,
    translate = [0, 0],
    isRoot,
    isInteractive,
    icon,
  } = props;
  const {id, links} = datum;
  const {state: {db, history, isAnimating}, fire} = useContext(zuiContext);
  const [isHover, setIsHover] = useState(false)
  const isArray = Array.isArray(links)
  const linkCount = isArray
    ? links.length
    : links;
  const square = linkCount
    ? Math.ceil(Math.sqrt(linkCount)) ** 2
    : 0;
  const transform = `translate(${translate})scale(${scale})`;
  const divisions = Math.sqrt(square);
  const max = divisions - 1;
  const nodeSize = 1 / (divisions + 1);
  const hue = hues[posMod(hueIndex, hues.length)];
  const lum = isHover ? '72.5%' : '70%'
  const fill = `hsl(${hue}, 66%, ${lum})`
  let onClick;
  let nodes = null;
  let x = max;
  let y = max;

  if (isArray) {
    nodes = [];

    // Iterate through the links in reverse stacking them diagnally.
    for (let i = links.length - 1; i >= 0; i--) {
      const linkDatum = links[i];
      const hueOffset = (x + y) % 2 === 0 ? 2 : -2;

      nodes.push(
        <Node
          key={linkDatum.id}
          datum={linkDatum}
          hueIndex={hueIndex + hueOffset}
          scale={scale * nodeSize}
          icon={linkDatum.icon}
          translate={[
            translate[0] + scale * (x + 1) * nodeSize,
            translate[1] + scale * (y + 1) * nodeSize,
          ]}
          isInteractive={isInteractive}
        />
      );

      // Set the `x` and `y` positions for the next tile.
      if (y === 0) {
        y = x - 1;
        x = 0;
      } else if (x === max) {
        x = y - 1;
        y = max;
      } else {
        x++;
        y--;
      }
    }
  }

  if (!isAnimating) {
    if (!isRoot && isInteractive) {
      onClick = async (event) => {
        fire('startZuiZoomIn', {datum, hueIndex, scale, translate, icon});
        event.stopPropagation();

        const nodes = await getNodes(db, datum.id);
        fire('loadDatum', nodes);
      }
    } else {
      onClick = async (event) => {
        event.stopPropagation();

        if (history.length > 1) {
          const nodes = await getNodes(db, history[history.length - 2].id);
          fire('loadDatum', nodes);
          fire('startZuiZoomOut');
        }
      }
    }
  }

  return (
    <>
      <g
        key={id}
        transform={transform}
        onClick={onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{cursor: 'pointer'}}
      >
        <rect
          x={0}
          y={0}
          width={1}
          height={1}
          fill={fill}
        />
        <g
          transform={`scale(${nodeSize})`}
        >
          <Icon
            name={icon}
            color={'black'}
            transform={`translate(${tran} ${tran}) scale(${Math.SQRT1_2})`}
          />
        </g>
      </g>
      {nodes}
    </>
  );
}