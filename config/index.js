module.exports = {
    // 打包相对路径的项目 解决样式中资源的路径问题
    publicPath: "/",
    // 开发环境
    development: {
        host: 'localhost',
        // 端口
        port: 8980,
        //api 代理地址
        apiURL: '',
        // eslint
        useEslint: false,
        showEslintErrorsInOverlay: false
    },
    // 生产环境
    production: {
        // 端口
        port: 8881,
        //api 代理地址
        apiURL: '',
        //打包输出路径 相对于项目根目录
        buildDir: 'dist'
    },

    // 源码路由
    originPagePath: 'src/views'
}