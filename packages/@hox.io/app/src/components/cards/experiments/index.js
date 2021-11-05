import React from 'react';
import Card from '../../card';
import {Column, Row, Spacing} from '@hox.io/components';
import Markdown from '../../markdown';

function Experiments() {
  return (
    <>
      <Row>
        <Column>
          <Spacing padding={1}>
            <Markdown content={`
# Experiments

---

[Simple Icons](https://hansoksendahl.github.io/simple-icons) - 2018  
> A visualization of the Simple Icon set from [Dan Leech](https://twitter.com/bathtype). The visualization maps each logo to its three dimensional coordinates in the HSL, RGB, and CMY color spaces. Built with [Three.js](https://threejs.org/).

<br />

[BubbleHash](https://hansoksendahl.github.io/bubblehash/) - 2014  
> A distributed database which implements the [Chord protocol](https://pdos.csail.mit.edu/papers/chord:sigcomm01/chord_sigcomm.pdf). Implemented with WebRTC and IndexedDB.

<br/>

[Cowbird](https://github.com/hansoksendahl/cowbird) - 2012  
> A scannerless table based LR(0)/LALR parser generator for JavaScript. It uses longest match to disambiguate similar parse paths.

<br/>

[Slogo](https://hansoksendahl.github.io/slogo/) - 2011  
> A programmable web-environment for creating WebGL visualizations. Features a novel programming language I develeloped inspired by Ruby and Logo.
            `} />
          </Spacing>
        </Column>
        <Column>
          <Spacing padding={1}>
            <Markdown content={`
# Contact Information

---

✉️ <a href="mailto:hansoksendahl@gmail.com">hansoksendahl@gmail.com</a>  
📞 <a href="tel:+15053339060">505.333.9060</a>

<br /><br />

# Social Profiles

---

- [Github](https://github.com/hansoksendahl)
- [LinkedIn](https://www.linkedin.com/in/hansoksendahl/)
- [Twitter](https://twitter.com/hansoksendahl)

            `} />
          </Spacing>
        </Column>
      </Row>
    </>
  )
}

export default function CardExperiments() {
  return (
    <Card y={2}>
      <Experiments />
    </Card>
  );
}