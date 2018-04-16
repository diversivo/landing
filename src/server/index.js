const serve = require('koa-static-server');
const Koa = require('koa');
const indexRoutes = require('./routes/index');

const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(serve({rootDir:'client',rootPath:'/'}));
app.use(indexRoutes.routes());
const server = app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;