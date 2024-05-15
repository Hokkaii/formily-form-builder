import React from 'react'
import { Switch } from 'antd'

export const FormItemSwitcher = (props) => {
  return (
    <Switch
      checked={props.value === 'FormItem'}
      onChange={(value) => {
        props.onChange(value ? 'FormItem' : undefined)
      }}
    />
  )
}
