import React from "react";
import {Icon, InputSelect} from '@hox.io/components';

export default function SelectIcon({
  value,
  defaultValue,
  ...props
}) {
  const actualValue = value || defaultValue;

  return (
    <>
      <div
        style={{
          height: '1rem',
          width: '1rem',
          marginRight: '0.5rem',
        }}
      >{actualValue && <Icon name={actualValue} />}</div>
      <InputSelect
        {...props}
        value={actualValue}
        options={[
          {label: '--'},
          {label: 'brackets', value: 'brackets'},
          {label: 'plane', value: 'plane'},
          {label: 'tools', value: 'tools'},
          {label: 'rocket', value: 'rocket'},
          {label: 'google', value: 'google'},
          {label: 'salesforce', value: 'salesforce'},
          {label: 'hiroad', value: 'hiroad'},
          {label: 'gopro', value: 'gopro'},
          {label: 'microsoft', value: 'microsoft'},
          {label: 'gage', value: 'gage'},
          {label: 'wsdot', value: 'wsdot'},
          {label: 'ox-', value: 'ox-'},
          {label: 'flask', value: 'flask'},
          {label: 'me', value: 'me'},
        ]}
        style={{
          marginRight: '0.5rem'
        }}
      />
    </>
  );
}