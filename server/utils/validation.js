var isRealString = function(str) {
    if (typeof str === 'string') {
        str = str.trim();
        if ( !( /[^\w\s]+/ig.test(str) || str.length === 0 ) ) {
            return true;
        }
    }
    return false;
};

module.exports = {isRealString};
