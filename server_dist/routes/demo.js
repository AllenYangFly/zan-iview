'use strict';

var _auth = require('../policies/auth');

var _auth2 = _interopRequireDefault(_auth);

var _demo = require('../controllers/demo');

var _demo2 = _interopRequireDefault(_demo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = require('koa-router')();

router.get('/demo/todo/:id', _demo2.default.findById);
router.post('/demo/todo', _demo2.default.create);
router.put('/demo/todo/:id', _demo2.default.updateById);
router.delete('/demo/todo/:id', _demo2.default.deleteById);

module.exports = router;