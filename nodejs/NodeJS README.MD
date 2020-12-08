# 配置NPM源

+ 临时安装，安装过程通过指定`--registry`参数即可
`$ npm install express --registry https://registry.npm.taobao.org`

+ 全局使用
``` js
$ npm config set registry https://registry.npm.taobao.org
// 设置完成通过以下方式验证
$ npm config get registry
// 或
$ npm info express
```

+ cnpm使用
``` js
// 安装cnpm  
$ npm install -g cnpm --registry https://registry.npm.taobao.org
// 使用cnpm安装
$ cnpm install express
```

# 模块化

+ 内置模块
 - 文件操作
+ 第三方模块
+ 自定义模块
 - 创建一个模块（一个js文件就是一个模块）
 - 导出一个模块（export.module=name）
 - 引用并调用一个模块（require）