'use strict';

var _youzanUrl = require('@youzan/youzan-url');

var _youzanUrl2 = _interopRequireDefault(_youzanUrl);

var _zan = require('@youzan/zan');

var _zan2 = _interopRequireDefault(_zan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = {
    SERVER_ROOT: __dirname,
    NODE_PORT: 8201,
    KEYS: ['zan-key', 'zan-secret'],
    VIEW_EXTRA_DATA: {
        url: _youzanUrl2.default
    },
    STATIC_PATH: '../static/'
};

let zan = new _zan2.default(config);