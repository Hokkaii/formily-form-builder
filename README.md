# fintech-platform

#### 开发

```sh
$ yarn install
$ yarn start
```

#### 启动 electron

```sh
$ yarn install
$ yarn start
$ yarn electron-start
```

#### 发布 uat

```sh
$ yarn install
$ yarn build:uat
```

#### 发布 prod

```sh
$ yarn install
$ yarn build
```

#### 打包 electron mac

```sh
$ yarn install
$ yarn build
$ yarn build:mac
```

#### 打包 electron win

```sh
$ yarn install
$ yarn build
$ yarn build:win
```

### 依赖说明

    number金额处理 http://numeraljs.com/

### 注意

    ├── README.md
    ├── config                      --- webpack 配置
    │   ├── env.js
    │   ├── getHttpsConfig.js
    │   ├── modules.js
    │   ├── paths.js
    │   ├── webpack.config.js
    │   └── webpackDevServer.config.js
    ├── electron-builder.json       --- electron builder配置
    ├── main.js                     --- electron 入口
    ├── mock                        --- mock server
    │   ├── api.js
    │   ├── middleware
    │   │   └── index.js
    │   ├── package.json
    │   ├── server.js
    │   ├── user.js
    │   └── yarn.lock
    ├── modules                    --- 本地包依赖，注意需要在 package-lock 和 yarn.lock 中同步
    ├── package.json
    ├── preload.js
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   └── robots.txt
    ├── scripts
    │   ├── build.js
    │   └── start.js
    ├── src
    │   ├── actions
    │   │   ├── global.js           --- 全局状态
    │   │   └── user.js
    │   ├── assets                  --- 静态资源目录
    │   │   └── ...
    │   ├── components              --- 公共组件
    │   │   ├── index.js
    │   │   └── menuObj.js
    │   ├── constant
    │   │   ├── ACTION_TYPE.js
    │   │   └── SelectList.js       --- select options data
    │   ├── index.js                --- app入口
    │   ├── index.less              --- 全局样式入口
    │   ├── reducers
    │   │   ├── global.js
    │   │   ├── index.js
    │   │   └── user.js
    │   ├── routes
    │   │   ├── ...                 --- 页面路由
    │   │   ├── hooks.js            --- 公共hooks
    │   │   └── index.js            --- 页面入口
    │   ├── styles                  --- 公共样式
    │   │   ├── common.less
    │   │   ├── init.less           --- 初始化
    │   │   └── theme.less          --- 公共样式变量
    │   ├── theme.js                --- antd主题覆盖
    │   └── utils
    │       ├── CityOptions.json    --- 省市区三级联动数据 仅供antd Cascader组件使用
    │       ├── api
    │       │   ├── user.js         --- api
    │       │   └── ...
    │       ├── request.js          --- 请求统一封装
    │       └── user.js             --- token
    └── yarn.lock
