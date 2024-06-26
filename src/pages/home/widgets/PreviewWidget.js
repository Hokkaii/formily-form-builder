import React, { useMemo, useEffect } from 'react';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
import {
  Form,
  FormItem,
  DatePicker,
  Checkbox,
  Cascader,
  Editable,
  Input,
  NumberPicker,
  Switch,
  Password,
  PreviewText,
  Radio,
  Reset,
  Select,
  Space,
  Submit,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  FormGrid,
  FormLayout,
  FormTab,
  FormCollapse,
  ArrayTable,
  ArrayCards,
} from '@formily/antd';
import { Card, Slider, Rate } from 'antd';
import { Steps } from '../source/components/Steps';
import { transformToSchema } from '@designable/formily-transformer';

const Text = ({ value, mode, content, style, ...props }) => {
  if (mode === 'richText') {
    return React.createElement('div', {
      dangerouslySetInnerHTML: { __html: value || content },
      style,
      ...props,
    });
  }
  if (mode === 'a') {
    return React.createElement(
      'div',
      {
        style,
      },
      React.createElement('a', { ...props }, value || content)
    );
  }
  const tagName = mode === 'normal' || !mode ? 'div' : mode;
  return React.createElement(
    tagName,
    {
      ...props,
      style,
    },
    value || content
  );
};

const SchemaField = createSchemaField({
  components: {
    Space,
    FormGrid,
    FormLayout,
    FormTab,
    FormCollapse,
    ArrayTable,
    ArrayCards,
    FormItem,
    DatePicker,
    Checkbox,
    Cascader,
    Editable,
    Input,
    Text,
    NumberPicker,
    Switch,
    Password,
    PreviewText,
    Radio,
    Reset,
    Select,
    Submit,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
    Card,
    Slider,
    Rate,
    Steps,
  },
});

export const PreviewWidget = (props) => {
  const form = useMemo(() => createForm(), []);
  // useEffect(() => {
  //   form.setValues({ abcStep: 2, abc: 'abc' });
  // }, [form]);
  const { form: formProps, schema } = transformToSchema(props.tree);
  return (
    <Form
      {...formProps}
      form={form}
    >
      <SchemaField schema={schema} />
    </Form>
  );
};
