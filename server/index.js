require('dotenv').config();
const Koa = require('koa');
const serve = require('koa-static-server');
const indexRoutes = require('./routes/index');
//const enforceHttps = require('koa-sslify');

const app = new Koa();
const PORT = process.env.PORT || 3000;


//app.use(enforceHttps({trustProtoHeader: true}));
app.use(serve({rootDir:'client',rootPath:'/'}));
app.use(indexRoutes.routes());
const server = app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;