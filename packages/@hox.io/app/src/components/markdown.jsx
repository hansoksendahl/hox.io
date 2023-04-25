import React from 'react';
import {Converter} from 'showdown';
import showdownKatex from 'showdown-katex';
import './view.css';

const converter = new Converter({
  extensions: [
    showdownKatex({
      // maybe you want katex to throwOnError
      throwOnError: true,
      // disable displayMode
      displayMode: false,
      // change errorColor to blue
      errorColor: '#1500ff',
    }),
  ],
});

export default function({content}) {
  let __html;

  try {
    __html = converter.makeHtml(content);
  } catch(e) {
    __html = 'Invalid Markdown or LaTeX';
  }

  return (
    <span className="markdown" dangerouslySetInnerHTML={{__html}}/>
  )
}