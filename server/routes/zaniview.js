import IviewController from '../controllers/iview';
const router = require('koa-router')();

const io = require('socket.io')(8202);

io.on('connection', socket => {
    socket.on('change', (message) => {
        message = message.code;
        io.emit('isEditing', true);
        io.emit('rootMessage', message);
    });

    socket.on('rootChange', (message) => {
        message = message.code;
        io.emit('isRootEditing', true);
        io.emit('message', message);
    });
});

router.get('/iview', IviewController.getIndexHtml);
router.get('/iviewroot', IviewController.getRootIndexHtml);
router.get('/zaniview', IviewController.getZanIviewHtml);


module.exports = router;
