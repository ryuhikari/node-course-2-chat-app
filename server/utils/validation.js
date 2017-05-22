var isRealString = (str) => {
  return typeof str === 'string' && str.trim().length > 0;
};

module.exports = {isRealString};

// var isRealString = function(str) {
//     if (typeof str === 'string') {
//         str = str.trim();
//         if ( !( /[^\w\s]+/ig.test(str) || str.length === 0 ) ) {
//             return true;
//         }
//     }
//     return false;
// };
//
// module.exports = {isRealString};
