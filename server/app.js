import YOUZAN_URL from '@youzan/youzan-url';
import Zan from '@youzan/zan';

const config = {
    SERVER_ROOT: __dirname,
    NODE_PORT: 8201,
    KEYS: ['zan-key', 'zan-secret'],
    VIEW_EXTRA_DATA: {
        url: YOUZAN_URL
    },
    STATIC_PATH: '../static/'
};

let zan = new Zan(config);
