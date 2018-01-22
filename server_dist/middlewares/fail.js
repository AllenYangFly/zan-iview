'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = (() => {
    var _ref = _asyncToGenerator(function* (ctx, next) {
        let path = ctx.path;

        if (/404/.test(path)) {
            yield ctx.render('www/common/404', { title: '404' });
        } else if (/403/.test(path)) {
            yield ctx.render('www/common/403', { title: '403' });
        } else if (/500/.test(path)) {
            yield ctx.render('www/common/500', { title: '500' });
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
                    yield ctx.render('www/common/404', { title: '404' });
                }
                break;
            case 403:
                yield ctx.render('www/common/403', { title: '403' });
                break;
            case 500:
                yield ctx.render('www/common/500', { title: '500' });
                break;
            default:
        }

        yield next();
    });

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();