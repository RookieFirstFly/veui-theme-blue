import '../icons/check-circle-o';
import '../icons/exclamation-circle-o';
import '../icons/info-circle-o';
import '../icons/cross-circle-o';
import '../icons/angle-left';
import '../icons/angle-right';
import '../icons/cross';
import config from 'veui/managers/config';

config.defaults({
    icons: {
        success: 'check-circle-o',
        warning: 'exclamation-circle-o',
        info: 'info-circle-o',
        error: 'cross-circle-o',
        prev: 'angle-left',
        next: 'angle-right',
        close: 'cross'
    },
    parts: {
        prev: 'link',
        next: 'link',
        close: 'link',
        closeLabel: 'link'
    },
    ui: {
        size: {
            values: ['limit']
        }
    }
}, 'alert');
