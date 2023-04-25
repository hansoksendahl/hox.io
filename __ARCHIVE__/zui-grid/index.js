import React, {useState} from 'react';
import Card, { Main, Aside } from '../../card';
import Node from './node';
import {getRandomLinks} from './helpers';
import ReactSVG from 'react-svg';

const links = getRandomLinks();

function Zui() {
  return (
    <>
      <Main>
        <ReactSVG src="spritesheet.svg" />
        <Node
          id={null}
          icon="goddess"
          links={links}
        />
      </Main>
      <Aside>
        
      </Aside>
    </>
  )
}

export default function CardZui() {
  return (
    <Card y={2}>
      <Zui />
    </Card>
  );
}