const router = require('koa-router')();

import IviewController from '../controllers/iview';

// router.get('/iview/:rooms', IviewController.getIndexHtml);
// router.get('/iviewroot/:rooms', IviewController.getRootIndexHtml);

router.get('/iview', IviewController.getIndexHtml);
router.get('/iviewroot', IviewController.getRootIndexHtml);

module.exports = router;
