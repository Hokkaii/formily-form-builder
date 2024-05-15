/* eslint-disable react/prop-types */
import React from 'react';
import _ from 'lodash';
import { Steps as AntdSteps } from 'antd';
import { createBehavior, createResource } from '@designable/core';
import { createVoidFieldSchema } from '../Field';
import { AllSchemas } from '../../schemas';
import { AllLocales } from '../../locales';

const { Step } = AntdSteps;
export const Steps = ({
    current, $options, ...props
}) => (
    <AntdSteps
        current={ props.current }
        { ...props }
    >
        {
            _.map($options, (item) => (
                <Step
                    title={ item?.$title }
                    description={ item?.others?.description }
                    subTitle={ item?.others?.subTitle }
                />
            ))
        }

    </AntdSteps>
);
Steps.Behavior = createBehavior({
    name: 'Steps',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'Steps',
    designerProps: { propsSchema: createVoidFieldSchema(AllSchemas.Steps) },
    designerLocales: AllLocales.Steps
});

Steps.Resource = createResource({
    icon: 'StepsSource',
    elements: [
        {
            componentName: 'Field',
            props: {
                type: 'string',
                'x-component': 'Steps'
            }
        }
    ]
});
