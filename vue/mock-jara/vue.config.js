module.exports = {
  chainWebpack: config => {
    config.resolve.alias
    //.set第一个参数：设置的别名，第二个参数：设置的路径
    // .set('@', resolve('./src'))
    // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
    }
      // 根据环境修改配置 process.env.NODE_ENV
      // #### 配置测试环境接口，线上服务环境接口
      // // 书写格式 VUE_APP_[自定义name] = "接口URL"
      // 使用时使用 process.env.VUE_APP_[自定义name]
      // .env  // 所有环境都可以使用
      // .env.development // 开发环境接口
      // .env.production // 生产环境文件
      // development 模式用于 vue-cli-service serve
      // production 模式用于 vue-cli-service build 和 vue-cli-service test:e2e
      // test 模式用于 vue-cli-service test:unit
      // #### process 下的特殊变量
      // NODE_ENV - 判断当前环境 "development"、"production" 或 "test"
      // BASE_URL - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。
      // development 模式用于 vue-cli-service serve
      // production 模式用于 vue-cli-service build 和 vue-cli-service test:e2e
      // test 模式用于 vue-cli-service test:unit
    )
  }
}
