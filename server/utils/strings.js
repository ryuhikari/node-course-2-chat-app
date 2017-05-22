var prettifyString = (str) => {
    return str.match(/\w+/ig).join(' ');
};

module.exports = {prettifyString};
