import { Spacing } from '@hox.io/components'
import Card from '../../card'
import { Aside, Main } from '../../golden'
import Markdown from '../../markdown'

const MeCard = () => (
  <>
    <Main>
      <Spacing padding={1}>
        <img
          src='/kai-and-dad.png'
          alt='A photo of myself and my son Kai'
          style={{ width: '100%' }}
        />
      </Spacing>
    </Main>
    <Aside>
      <Spacing padding={1}>
        <Markdown
          content={`
# Contact Information

---

Hans Oksendahl

✉️ <a href="mailto:hans@oksendahl.com">hans@oksendahl.com</a>  

# Social Profiles

---

- [Github](https://github.com/hansoksendahl)
- [LinkedIn](https://www.linkedin.com/in/hansoksendahl/)

# Resume

---

📄 <a href="/_Hans_Oksendahl_Resume.pdf" download>Resume</a>

# Experiments

---

- [Simple Icons](https://hansoksendahl.github.io/simple-icons) - 2018  
- [Sad Taco](https://hansoksendahl.github.io/sadtaco/) - 2014
- [Slogo](https://hansoksendahl.github.io/slogo/demo03.html) - 2011
            `}
        />
      </Spacing>
    </Aside>
  </>
)

export default function Me() {
  return (
    <Card y={2}>
      <MeCard />
    </Card>
  )
}
