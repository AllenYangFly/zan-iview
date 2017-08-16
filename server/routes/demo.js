const router = require('koa-router')();

import auth from '../policies/auth';
import DemoController from '../controllers/demo';

router.get('/demo/todo/:id', DemoController.findById);
router.post('/demo/todo', DemoController.create);
router.put('/demo/todo/:id', DemoController.updateById);
router.delete('/demo/todo/:id', DemoController.deleteById);

module.exports = router;
