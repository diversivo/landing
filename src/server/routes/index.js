const Router = require('koa-router');
const koaBody = require('koa-body');
const router = new Router();

router.post('/contacto', koaBody(),(ctx)=>{
    console.log(ctx.request.body);
    ctx.body = '';
});

module.exports = router;