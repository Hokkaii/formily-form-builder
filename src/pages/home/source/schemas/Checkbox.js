// import { ISchema } from '@formily/react'

export const Checkbox = {
  type: 'object',
  properties: {
    autoFocus: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
};
