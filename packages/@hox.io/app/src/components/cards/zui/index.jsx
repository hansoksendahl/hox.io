import useDexie from '@hox.io/use-dexie'
import { useContext } from 'react'
import { ReactSVG } from 'react-svg'
import Card from '../../card'
import { DB_NAME } from './constants'
import { populate, versions } from './db'
import { getNodes } from './db/node'
import initialState, { initState } from './initialState'
import { Update, View } from './interfaces'
import reducer from './reducer'
import { zuiContext, ZuiStore } from './store'

function Zui() {
  const {
    state: { mode },
    fire,
  } = useContext(zuiContext)
  const db = useDexie(DB_NAME, versions, null, async db => {
    window.db = db
    await populate(db)
    const nodes = await getNodes(db)

    fire('initDb', db)
    fire('loadDatum', nodes)
  })

  switch (mode) {
    case 'update':
      return <Update />
    default:
      return <View />
  }
}

export default function CardZui() {
  return (
    <ZuiStore reducer={reducer} initialState={initialState} init={initState}>
      <ReactSVG src='spritesheet.svg' style={{ height: 0 }} />
      <Card y={1}>
        <Zui mode='update' />
      </Card>
    </ZuiStore>
  )
}
