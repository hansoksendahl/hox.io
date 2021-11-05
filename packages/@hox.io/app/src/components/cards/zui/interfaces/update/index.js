import React, {useContext} from 'react';
import {formContext, Form} from './form';
import SelectIcon from './selectIcon';
import SetContent from './setContent';
import validate from './validate';
import {Column, Icon, Row, Text} from '@hox.io/components';
import {zuiContext} from '../../store';
import putNodes from '../../db/node/putNodes';
import getNodes from '../../db/node/getNodes';

function UpdateForm() {
  const {state: {db}, fire} = useContext(zuiContext);
  const {
    state: {
      values: {
        id,
        content,
        links,
      },
      isValid
    },
    setValue,
  } = useContext(formContext);

  const linkList = links.map((link, i) => (
    <li key={i}>
      <Row>
        <SelectIcon
          value={link.icon}
          onChange={async (value) => {
            const newLinks = [...links];
            newLinks[i].icon = value;

            setValue('links', newLinks);
          }}
        />
        <span
          onClick={async () => {
            const newLinks = [...links];
            newLinks.splice(i, 1);

            setValue('links', newLinks);
          }}
          style={{
            display: 'inline-block',
            width: '1rem',
            height: '1rem',
          }}
        >
          <Icon name="delete" color="red" />
        </span>
      </Row>
    </li>
  ));

  return (
    <>
      <Column>
        <SetContent field="content" />
        <Column
          style={{
            flex: 1,
          }}
        >
          <Text>Links</Text>
          <ol
            style={{
              flex: 1,
              border: '1px solid black'
            }}
          >
            {linkList}
          </ol>
          <Row
            style={{
              justifyContent: 'flex-end'
            }}
          >
            <button
              onClick={async () => {
                setValue('links', [
                  ...links,
                  {id: null, content: '', links: []}
                ]);
              }}
            >
              add
            </button>
          </Row>
        </Column>
        <Row
          style={{
            justifyContent: 'flex-end'
          }}
        >
          <button
            disabled={!isValid}
            onClick={async () => {
              await putNodes(db, {id, content, links});
              const nodes = await getNodes(db, id);

              fire('updateDatum', nodes);
              fire('setMode', 'view');
            }}
          >Save</button>
        </Row>
      </Column>
    </>
  );
}

export default function Update() {
  const {
    state: {
      editDatum,
    },
  } = useContext(zuiContext);

  return (
    <Form
      values={editDatum}
      validate={validate}
    >
      <UpdateForm />
    </Form>
  )
}


