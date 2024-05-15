import React from 'react';
import { Password as FormilyPassword } from '@formily/antd';
import { createBehavior, createResource } from '@designable/core';

import { createFieldSchema } from '../Field';
import { AllSchemas } from '../../schemas';
import { AllLocales } from '../../locales';

export const Password = FormilyPassword;

Password.Behavior = createBehavior({
  name: 'Password',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Password',
  designerProps: {
    propsSchema: createFieldSchema(AllSchemas.Password),
  },
  designerLocales: AllLocales.Password,
});

Password.Resource = createResource({
  icon: 'PasswordSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: 'Password',
        'x-decorator': 'FormItem',
        'x-component': 'Password',
      },
    },
  ],
});
