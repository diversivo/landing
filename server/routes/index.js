const Router = require('koa-router');
const koaBody = require('koa-body');
const mail = require('../mail/index');

const router = new Router();

router.post('/contact', koaBody(), async (ctx)=>{
    console.log(ctx.request.body);
    ctx.body = {
        response: await mail(ctx.request.body)
    };
});

module.exports = router;