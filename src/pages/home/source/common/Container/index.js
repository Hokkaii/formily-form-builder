import React from 'react';
import { observer } from '@formily/reactive-react';
import { DroppableWidget } from '@designable/react';
import './styles.less';

export const Container = observer((props) => {
  return <DroppableWidget>{props.children}</DroppableWidget>;
});

export const withContainer = (Target) => {
  return (props) => {
    return (
      <DroppableWidget>
        <Target {...props} />
      </DroppableWidget>
    );
  };
};
