/* eslint-disable */
import React from "react";
import { createBehavior, createResource } from "@designable/core";
import { createVoidFieldSchema } from "../Field";
import { AllSchemas } from "../../schemas";
import { AllLocales } from "../../locales";
// import cls from "classnames";
import "./styles.less";

export const Text = (props) => {
    const { mode, style, value, content, ...otherProps } = props;
    if (mode === "richText") {
        return React.createElement("div", {
            dangerouslySetInnerHTML: { __html: value || content },
            style,
            ...otherProps,
        });
    }
    if (mode === "a") {
        return React.createElement(
            "div",
            {
                style,
                className: "dn-text",
                "data-content-editable": "x-component-props.content",
            },
            React.createElement("a", { ...otherProps }, value || content)
        );
    }
    const tagName = mode === "normal" || !mode ? "div" : mode;
    return React.createElement(
        tagName,
        {
            ...otherProps,
            style,
            className: "dn-text",
            "data-content-editable": "x-component-props.content",
        },
        content
    );
};

Text.Behavior = createBehavior({
    name: "Text",
    extends: ["Field"],
    selector: (node) => node.props["x-component"] === "Text",
    designerProps: {
        propsSchema: createVoidFieldSchema(AllSchemas.Text),
    },
    designerLocales: AllLocales.Text,
});

Text.Resource = createResource({
    icon: "TextSource",
    elements: [
        {
            componentName: "Field",
            props: {
                type: "string",
                "x-component": "Text",
            },
        },
    ],
});
