import React, {useContext} from 'react';
import ReactSVG from 'react-svg';
import Card from '../../card';
import {zuiContext, ZuiStore} from './store';
import reducer from './reducer';
import initialState, {initState} from './initialState';
import {Update, Delete, View} from './interfaces';
import useDexie from '@hox.io/use-dexie';
import {DB_NAME} from './constants';
import {versions, populate} from './db';
import {getNodes} from './db/node';


function Zui() {
  const {state: {mode}, fire} = useContext(zuiContext);
  const db = useDexie(
    DB_NAME,
    versions,
    null,
    async (db) => {
      window.db = db;
      await populate(db);
      const nodes = await getNodes(db);

      fire('initDb', db);
      fire('loadDatum', nodes);
    }
  );

  switch (mode) {
    case 'update':
      return <Update />;
    default:
      return <View />;
  }
}

export default function CardZui() {
  return (
    <ZuiStore
      reducer={reducer}
      initialState={initialState}
      init={initState}
    >
      <ReactSVG src='spritesheet.svg' style={{height: 0}}/>
      <Card y={2}>
        <Zui />
      </Card>
    </ZuiStore>
  );
}