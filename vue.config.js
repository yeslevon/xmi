module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: 'docs/main.js',
      outputDir: 'docs/dist/',
      template: 'docs/index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', `${__dirname}/docs`)
      .set('@@', `${__dirname}/packages`)
      .end()

    config.module.rules.delete('eslint')

    config.module
      .rule('eslint')
      .test(/\.(vue|(j|t)sx?)$/)
        .pre()
        .exclude
        .add(/node_modules/)
        .add(/docs/)
        .end()
      .use('eslint')
        .loader('eslint-loader')
        .options({
          extensions: [
            '.js',
            '.jsx',
            '.vue',
            '.ts',
            '.tsx'
          ]
        })

    config.module.rule('md')
      .test(/\.md$/)
      .use('vue-loader-v16')
        .loader('vue-loader-v16')
        .end()
      .use('@vant/markdown-loader')
        .loader('@vant/markdown-loader')
        .end()
  }
}
