const router = require('koa-router')();

import auth from '../policies/auth';
import IndexController from '../controllers/index';

router.get('/', auth, IndexController.getIndexHtml);

module.exports = router;
