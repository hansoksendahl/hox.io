import React from 'react';
import CardIntro from './components/cards/intro';
import ManyHats from './components/cards/manyHats';
import Zui from './components/cards/zui';
import Experiments from './components/cards/experiments';

export default function App() {
  return (
    <>
      <CardIntro />
      <ManyHats />
      <Zui />
      <Experiments />
    </>
  )
}