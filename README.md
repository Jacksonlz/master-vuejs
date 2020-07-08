

# tsd-view（基于eggjs、vuejs、mqtt开发的设备管理系统）

服务端接口地址：无

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
> * 用户模块：用户列表（带分页）、新增、删除、编辑、头像上传等
> * 个人资料编辑设置
> * 设备模块：设备列表（带分页）、新增、删除、编辑等
> * 设备实时参数图表展现

TODO

> * 设备参数告警、参数管理等
> * OAuth2授权管理模块
> * 消息管理模块

## 构建

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

## 测试账号

caiya928@aliyun.com/admin


