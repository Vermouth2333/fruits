const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/v3",{
        target:"https://wap.fruitday.com",
        changeOrigin:true,
    }))
    app.use(proxy( "/api",{
        target:"http://39.97.33.178",
        changeOrigin:true,
    }))
    app.use(proxy("/product",{
        target:"https://wap.fruitday.com//v3",
        changeOrigin:true,
    }))
    app.use(proxy("/comment",{
        target:"https://wap.fruitday.com//v3",
        changeOrigin:true,

    }))

}
