const Router = require('koa-router');

const router = new Router();
const BASE_URL = '/api/v1/ciudad';
const BASE_URL_ = '/api/v1/dias';

router.get(BASE_URL,async (ctx)=>{
    try{
        const cities = await queries.getAll();
        ctx.body = {
            status:'success',
            data: cities
        };
    } catch(err){
        console.log(err);
    }
});

router.get(`${BASE_URL}/:id`,async (ctx)=>{
    try{
        const city = await queries.get(ctx.params.id);
        ctx.body = {
            status: 'success',
            data: city
        };
    } catch(err){
        console.log(err);
    }
});

router.get(`${BASE_URL_}/:id_u/:id_d`,async (ctx)=>{
    try{
        const city_u = await queries.get(ctx.params.id_u);
        const city_d = await queries.get(ctx.params.id_d);
        const dias = await queries.getDias(ctx.params.id_u,ctx.params.id_d);
        ctx.body = {
            status:'success',
            data: {
                ciudad_uno:city_u,
                ciudad_dos:city_d,
                dias:dias[0].dias
            }
        };
    } catch (err){
        console.log(err);
    }
    
});

module.exports = router;