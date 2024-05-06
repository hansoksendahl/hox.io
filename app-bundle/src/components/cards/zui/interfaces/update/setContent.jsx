import React from "react";
import {Column, Text, InputText, InputBlob, Row} from '@hox.io/components';
import {useForm} from './form';

export default function SetContent({
  field,
  ...props
}) {
  const {
    error,
    value,
    setValue,
    setTouched,
  } = useForm(field);

  return (
    <Column style={{flex: 2}}>
      <Text>Content</Text>
      <InputBlob
        {...props}
        onBlur={setTouched}
        onChange={setValue}
        value={value}
        style={{
          border: '1px solid black',
          height: '100%',
          flex: 1,
        }}
      />
      {error}
    </Column>
  );
}