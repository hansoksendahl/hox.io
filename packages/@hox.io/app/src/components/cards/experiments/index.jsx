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
# Design

---

[Simple Icons](https://hansoksendahl.github.io/simple-icons) - 2018  
> A visualization of the Simple Icon set from [Dan Leech](https://twitter.com/bathtype). The visualization maps each logo to its three dimensional coordinates in the HSL, RGB, and CMY color spaces.  
> Built with [Three.js](https://threejs.org/).

<br />

[Sad Taco](https://hansoksendahl.github.io/sadtaco/) - 2014  
> They lost all their delicious fillings, please help!  
> Built with [d3](https://d3js.org/).
            `} />
          </Spacing>
        </Column>
        <Column>
          <Spacing padding={1}>
            <Markdown content={`
# Contact Information

---

✉️ <a href="mailto:hansoksendahl@gmail.com">hansoksendahl@gmail.com</a>  

<br /><br />

# Resume

---

📄 <a href="/_Hans_Oksendahl_Resume.pdf" download>Resume</a>

<br /><br />

# Social Profiles

---

- [Github](https://github.com/hansoksendahl)
- [LinkedIn](https://www.linkedin.com/in/hansoksendahl/)

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