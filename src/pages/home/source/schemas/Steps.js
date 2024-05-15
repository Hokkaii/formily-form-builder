/* eslint-disable */
// import { ISchema } from '@formily/react'
import { Editable } from '@formily/antd'

export const Steps = {
    type: 'object',
    properties: {
        $options: {
            type: 'array',
            'x-component': 'ArrayItems',
            'x-decorator': 'FormItem',
            "x-decorator-props": {
                "layout": "vertical",
            },
            'x-component-props': { style: { width: '100%' } },
            default: [
                {
                    $title: 'Finished',
                    others: {
                        description: 'some description'
                    }
                },
                {
                    $title: 'In Progress',
                    others: {
                        description: 'some description',
                        subTitle: 'Left 00:00:08'
                    }
                },
                {
                    $title: 'Waiting',
                    others: {
                        description: 'some description'
                    }
                },
            ],
            items: {
                type: 'object',
                'x-decorator': 'ArrayItems.Item',
                properties: {
                    sort: {
                        type: 'void',
                        'x-decorator': 'FormItem',
                        'x-component': 'ArrayItems.SortHandle',
                    },
                    $title: {
                        type: 'string',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-component-props': {
                            bordered: false,
                            size: "small"
                        },
                    },
                    others: {
                        type: 'object',
                        title: '配置其他数据',
                        'x-component': Editable.Popover,
                        'x-component-props': {
                            overlayStyle: {
                                width: 300,
                            }
                        },
                        properties: {
                            subTitle: {
                                type: 'string',
                                title: '子标题',
                                'x-decorator': 'FormItem',
                                'x-component': 'Input',
                                "x-decorator-props": {
                                    "labelCol": 6
                                },
                            },
                            description: {
                                type: 'string',
                                title: '描述',
                                'x-decorator': 'FormItem',
                                'x-component': 'Input',
                                "x-decorator-props": {
                                    "labelCol": 6
                                },
                            }
                        },
                    },
                    remove: {
                        type: 'void',
                        'x-decorator': 'FormItem',
                        'x-component': 'ArrayItems.Remove',
                    },
                },
            },
            properties: {
                add: {
                    type: 'void',
                    title: '添加条目',
                    'x-component': 'ArrayItems.Addition',
                },
            },
        },
        // $options: {
        //     type: 'array',
        //     'x-component': 'ArrayItems',
        //     'x-decorator': 'FormItem',
        //     "x-decorator-props": {
        //         "layout": "vertical",
        //     },
        //     "x-component-props": {
        //         style: { width: '100%' }
        //     },
        //     default: [
        //         {
        //             $title: 'Finished',
        //             description: 'some description'
        //         },
        //         {
        //             $title: 'In Progress',
        //             description: 'some description',
        //             subTitle: 'Left 00:00:08'
        //         },
        //         {
        //             $title: 'Waiting',
        //             description: 'some description'
        //         },
        //     ],
        //     items: {
        //         type: 'object',
        //         properties: {
        //             $opreate: {
        //                 type: 'void',
        //                 'x-component': 'Space',
        //                 "x-component-props": {
        //                     size: 0,
        //                     style: { width: '100%', display: 'flex', justifyContent: 'flex-end' }
        //                 },
        //                 properties: {
        //                     moveUp: {
        //                         type: 'void',
        //                         'x-component': 'ArrayItems.MoveUp',
        //                     },
        //                     moveDown: {
        //                         type: 'void',
        //                         'x-component': 'ArrayItems.MoveDown',
        //                     },
        //                     remove: {
        //                         type: 'void',
        //                         'x-component': 'ArrayItems.Remove'
        //                     },
        //                 }
        //             },
        //             $title: {
        //                 type: 'string',
        //                 title: '标题',
        //                 'x-decorator': 'FormItem',
        //                 'x-component': 'Input',
        //                 "x-decorator-props": {
        //                     "labelCol": 6
        //                 },
        //                 required: true
        //             },
        //             subTitle: {
        //                 type: 'string',
        //                 title: '子标题',
        //                 'x-decorator': 'FormItem',
        //                 'x-component': 'Input',
        //                 "x-decorator-props": {
        //                     "labelCol": 6
        //                 },
        //             },
        //             description: {
        //                 type: 'string',
        //                 title: '描述',
        //                 'x-decorator': 'FormItem',
        //                 'x-component': 'Input',
        //                 "x-decorator-props": {
        //                     "labelCol": 6
        //                 },
        //             }
        //         }
        //     },
        //     properties: {
        //         add: {
        //             type: 'void',
        //             title: '添加步骤',
        //             'x-component': 'ArrayItems.Addition',
        //         },
        //     },
        // },
        current: {
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'NumberPicker',
            default: 0
        },

    },
};
