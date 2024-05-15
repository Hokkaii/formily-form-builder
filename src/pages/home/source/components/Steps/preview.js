/* eslint-disable react/prop-types */
import React from 'react';
import _ from 'lodash';
import { Steps as AntdSteps } from 'antd';
import { createBehavior, createResource } from '@designable/core';
import { createVoidFieldSchema } from '../Field';
import { AllSchemas } from '../../schemas';
import { AllLocales } from '../../locales';

const { Step } = AntdSteps;
export const Steps = (props) => {
  return (
    <AntdSteps
      current={props?.value || props?.default}
      {...props}
    >
      {_.map(props?.$options, (item) => (
        <Step
          title={item?.$title}
          description={item?.others?.description}
          subTitle={item?.others?.subTitle}
        />
      ))}
    </AntdSteps>
  );
};
Steps.Behavior = createBehavior({
  name: 'Steps',
  extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Steps',
  designerProps: { propsSchema: createVoidFieldSchema(AllSchemas.Steps) },
  designerLocales: AllLocales.Steps,
});

Steps.Resource = createResource({
  icon: 'StepsSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'number',
        'x-decorator': 'FormItem',
        'x-component': 'Steps',
      },
    },
  ],
});
