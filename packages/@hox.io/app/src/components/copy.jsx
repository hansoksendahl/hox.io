import React from 'react';
import {Text} from '@hox.io/components';
import getCopy from '../utils/getCopy';

export default function Copy({
  name,
  ...attr
}) {
  const template = getCopy(name);

  return (
    <Text
      dangerouslySetInnerHTML={{
        __html: template,
      }}
      {...attr}
    ></Text>
  );
}