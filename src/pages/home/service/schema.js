// import { Engine } from '@designable/core'
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer';
import { message } from 'antd';

export const saveSchema = (designer) => {
  localStorage.setItem(
    'formily-schema',
    JSON.stringify(transformToSchema(designer.getCurrentTree()))
  );
  message.success('Save Success');
};

export const loadInitialSchema = (designer) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem('formily-schema')))
    );
  } catch {}
};
