module.exports =  {
    devServer : {
        //配置反向代理，实现跨域
        proxy : {
            '/api' : {
                target : 'http://39.97.33.178',
                changeOrigin : true
            }
        }
    }
}