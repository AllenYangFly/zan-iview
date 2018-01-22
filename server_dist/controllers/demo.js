'use strict';

var _demo = require('../services/demo1');

var _demo2 = _interopRequireDefault(_demo);

var _demo3 = require('../services/demo2');

var _demo4 = _interopRequireDefault(_demo3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const DemoController = {

    findById(ctx) {
        return _asyncToGenerator(function* () {
            const id = ctx.params.id;
            ctx.body = _demo2.default.findById(id);
        })();
    },

    create(ctx) {
        return _asyncToGenerator(function* () {
            const data = ctx.getPostData();
            ctx.body = _demo2.default.create(data);
        })();
    },

    updateById(ctx) {
        return _asyncToGenerator(function* () {})();
    },

    deleteById(ctx) {
        return _asyncToGenerator(function* () {})();
    }

};

module.exports = DemoController;