import { Space as FormilySpace } from '@formily/antd';
import { createBehavior, createResource } from '@designable/core';

import { createVoidFieldSchema } from '../Field';
import { withContainer } from '../../common/Container';
import { AllSchemas } from '../../schemas';
import { AllLocales } from '../../locales';

export const Space = withContainer(FormilySpace);

Space.Behavior = createBehavior({
  name: 'Space',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Space',
  designerProps: {
    droppable: true,
    inlineChildrenLayout: true,
    propsSchema: createVoidFieldSchema(AllSchemas.Space),
  },
  designerLocales: AllLocales.Space,
});

Space.Resource = createResource({
  icon: 'SpaceSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'void',
        'x-component': 'Space',
      },
    },
  ],
});
