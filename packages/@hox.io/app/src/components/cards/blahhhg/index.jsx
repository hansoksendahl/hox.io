import { Spacing } from '@hox.io/components'
import Card from '../../card'
import { Aside, Main } from '../../golden'
import Markdown from '../../markdown'

const BlahhhgCard = () => (
  <>
    <Main>
      <Spacing padding={1}>
        <img
          src='/bacon.webp'
          alt='The chunkiest bacon'
          style={{ width: '100%' }}
        />
      </Spacing>
    </Main>
    <Aside>
      <Spacing padding={1}>
        <Markdown
          content={`
# New blog!

Introducing my blog—your new haven for musings on entrepreneurship, the art of productivity, the enigma of code, and an array of other eclectic thoughts. Ready to dive deeper? Let's explore the uncharted together!

<a href="https://blog.hox.io"><button>Go to blog</button></a>
`}
        />
      </Spacing>
    </Aside>
  </>
)

export default function Blahhhg() {
  return (
    <Card y={1}>
      <BlahhhgCard />
    </Card>
  )
}
