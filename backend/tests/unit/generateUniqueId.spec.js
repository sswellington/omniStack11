const generateUniqueID = require('../../src/utils/generateUniqueID');

describe('Generate Unique Id', () => {
    it('should generate an unique Id', () => {
        const id = generateUniqueID();
        expect(id).toHaveLength(8);
    });
});