'use strict';

var _auth = require('../policies/auth');

var _auth2 = _interopRequireDefault(_auth);

var _index = require('../controllers/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = require('koa-router')();

router.get('/', _auth2.default, _index2.default.getIndexHtml);

module.exports = router;