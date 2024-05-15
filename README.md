# formily-form-builder

## 说明

[Formily表单设计器](https://designable-antd.formilyjs.org)是基于 [designable](https://github.com/alibaba/designable) 而扩展出来的扩展包，它在继承了 designable 的基础能力上，提供了 Formily 基础表单的搭建和配置能力，本项目提供了一个可运行的 demo并内置一些简单的自定义控件，可以直接在本地运行。

## 项目结构

    ├── README.md
    ├── modules                    --- 本地包依赖目录，注意需要在 package-lock.json 和 yarn.lock 中同步固定
    │   └── @monaco-editor-react
    ├── src
    │   ├── .umi                   --- umi临时目录
    │   └── pages                  --- 路由文件夹
    │        └── home
    │             ├── service      --- schema 保存与加载逻辑
    │             ├── source       --- 核心资源文件夹，主要包含表单控件、控件相关schema、控件相关locales以及一些创建控件所需的逻辑等
    │             ├── widgets      --- 控件目录，包括顶部按钮、logo、Markup-tab、Preview-tab、Schema-tab等
    │             └── index        --- 表单设计器展示页
    ├── package.json
    ├── package-lock.json
    └── yarn.lock

## 注意

在某些 webpack 版本和配置中，可能会出现编译 [@monaco-editor/react](https://github.com/suren-atoyan/monaco-react) 包失败报错的情况，这是因为 [@designable/react-settings-form](https://www.npmjs.com/package/@designable/react-settings-form) 包依赖了 @monaco-editor/react 包，而后者的 es 编译版本过高出现一些高级语法导致的，这个问题可以通过配置 webpack 的 loader 选项进行配置。
如果上述方法无效，则可以通过手动打包 @monaco-editor/react 包并将打包结果放置到本地进行加载解决，同时要去修改 package-lock.json 或 yarn.lock 固定住包对包的依赖关系：

```
...
file: modules/@monaco-editor-react
...
```

项目里 modules 放置了 4.x 版本的 @monaco-editor/react 包的 es 低版本的编辑包，可以自行引用。
