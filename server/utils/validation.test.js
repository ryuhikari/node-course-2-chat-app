const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(98);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var res = isRealString('          ');
        expect(res).toBe(false);
    });

    it('should reject string with non-word and non-digit characters', () => {
        var res = isRealString('  Andrew+25   @room');
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var res = isRealString('  Andrew  ');
        expect(res).toBe(true);
    });
});
