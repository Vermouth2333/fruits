const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/v3",{
        target:"https://wap.fruitday.com",
        changeOrigin:true,
    }))
}