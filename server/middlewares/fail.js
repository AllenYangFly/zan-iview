'use strict';

module.exports = async(ctx, next) => {
    let path = ctx.path;

    if (/404/.test(path)) {
        await ctx.render('www/common/404', { title: '404' });
    } else if (/403/.test(path)) {
        await ctx.render('www/common/403', { title: '403' });
    } else if (/500/.test(path)) {
        await ctx.render('www/common/500', { title: '500' });
    }

	console.log(`status code: ${ctx.status}`);
    switch (ctx.status) {
        case 404:
            let path = ctx.path;
            if (/\/api\//.test(path)) {
                ctx.body = {
                    code: 9999,
                    msg: '接口不存在'
                };
            } else {
                ctx.status = 404;
                await ctx.render('www/common/404', { title: '404' });
            }
            break;
        case 403:
            await ctx.render('www/common/403', { title: '403' });
            break;
        case 500:
            await ctx.render('www/common/500', { title: '500' });
            break;
        default:
    }

    await next();
};