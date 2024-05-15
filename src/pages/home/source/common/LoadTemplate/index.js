import React from 'react'
import { NodeActionsWidget } from '@designable/react'

export const LoadTemplate = (props) => {
  return (
    <NodeActionsWidget>
      {props.actions?.map((action, key) => {
        return <NodeActionsWidget.Action {...action} key={key} />
      })}
    </NodeActionsWidget>
  )
}
