'use strict';

var _iview = require('../controllers/iview');

var _iview2 = _interopRequireDefault(_iview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = require('koa-router')();

const io = require('socket.io')(8202);

io.on('connection', socket => {
    socket.on('change', message => {
        message = message.code;
        io.emit('isEditing', true);
        io.emit('rootMessage', message);
    });

    socket.on('rootChange', message => {
        message = message.code;
        io.emit('isRootEditing', true);
        io.emit('message', message);
    });
});

router.get('/iview', _iview2.default.getIndexHtml);
router.get('/iviewroot', _iview2.default.getRootIndexHtml);
router.get('/zaniview', _iview2.default.getZanIviewHtml);

module.exports = router;