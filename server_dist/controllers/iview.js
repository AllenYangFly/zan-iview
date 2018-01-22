'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const IviewController = {
    getIndexHtml(ctx) {
        return _asyncToGenerator(function* () {
            yield ctx.render('www/view/index.html');
        })();
    },
    getRootIndexHtml(ctx) {
        return _asyncToGenerator(function* () {
            yield ctx.render('www/viewroot/index.html');
        })();
    },
    getZanIviewHtml(ctx) {
        return _asyncToGenerator(function* () {
            yield ctx.render('www/zaniview/index.html');
        })();
    }
};

module.exports = IviewController;