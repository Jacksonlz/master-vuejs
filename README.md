

# view简版

服务端接口地址：无
> * 用户注册，登录模块（支持第三方登录）
> * 用户模块（用户管理）
> * 设备模块（设备管理、设备实时监控、设备参数记录、设备类别管理、参数管理等）
> * 授权模块（引入OAuth2.0授权服务，方便将接口以OAuth提供第三方）
> * 消息模块（用户申请帮助消息、设备参数告警消息）

## 技术栈

关键字

> * 前端：vuejs、vue-router、vuex、axios、element-ui、iconfont、mqttjs


## 目前进展

已完成

> * 用户登录、退出
>   *用户注册。第三方注册
> * 用户模块：用户列表，头像上传等
> * 个人资料编辑设置
> * 设备模块：设备列表：增删改查
> * 设备实时参数图表展现
>* 未完待续
TODO



## 构建工具
webstorm
vscode

``` bash
# 安装依赖
npm install

# 测试运行
npm run dev

# 构建发布包
npm run build

# 构建并导出report
npm run build --report
```

#测试


