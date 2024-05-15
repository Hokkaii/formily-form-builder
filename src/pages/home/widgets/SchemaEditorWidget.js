import React from 'react';
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer';

import { MonacoInput } from '@designable/react-settings-form';

export const SchemaEditorWidget = (props) => {
  return (
    <MonacoInput
      {...props}
      value={JSON.stringify(transformToSchema(props.tree), null, 2)}
      onChange={(value) => {
        props.onChange?.(transformToTreeNode(JSON.parse(value)));
      }}
      language="json"
    />
  );
};
