import React, {useContext} from 'react';
import { Main, Aside } from '../../../../card';
import Node from '../../node';
import ZoomNode from '../../zoomNode';
import {zuiContext} from '../../store';
import {Column, Row, Text, Icon} from '@hox.io/components';
import Markdown from '../../../../markdown';
import { exportDB } from 'dexie-export-import';

export default function View() {
  const {
    state,
    fire
  } = useContext(zuiContext);

  const {datum, zoomProps, datumProps, isAnimating} = state;

  const dumpDb = async () => {
    const blob = await exportDB(state.db)
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url)
    link.setAttribute('download', true)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!datum) return null;

  return (
    <>
      <Main>
        <svg viewBox='0,0 1,1'>
          <Node
            datum={datum}
            {...datumProps}
            isRoot={true}
            isInteractive={true}
          />
          {isAnimating && (
            <ZoomNode
              {...zoomProps}
            />
          )}
        </svg>
      </Main>
      <Aside>
        <Column
          style={{
            justifyContent: "space-between",
            height: '100%'
          }}
        >
          <Column>
            <Text>
              <Markdown content={datum.content} />
            </Text>
          </Column>
          {(process.env.NODE_ENV === 'development') && (
            <Row
              style={{
                height: '1rem',
                justifyContent: 'flex-end'
              }}
            >
              <Icon
                name="edit"
                width='1rem'
                height='1rem'
                color="orange"
                onClick={() => fire('setMode', 'update')}
              />
              <Icon
                name="edit"
                width='1rem'
                height='1rem'
                color='orange'
                onClick={() => dumpDb()}
              />
            </Row>
          )}
        </Column>
      </Aside>
    </>
  );
}
