module.exports = {
  // lintOnSave: false,
  publicPath: '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 16, // 换算的基数
            selectorBlackList: [], // 忽略转换正则匹配项
            propList: ['*'],
            // 插件会转化所有的样式的px。比如引入了三方UI，也会被转化。可以使用selectorBlackList字段来过滤。
            // 如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
          }),
        ]
      }
    }
  }
}