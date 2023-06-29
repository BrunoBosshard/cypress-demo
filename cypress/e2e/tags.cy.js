/// <reference types="cypress" />

// These tests will be skipped. To use them, remove the ".skip" annotation!
// ========================================================================

describe.skip('block with a tag', { tags: '@regression' }, () => {

    it('example tag test one', { tags: ['@firstTag', '@secondTag'] }, () => {
        expect(true).to.equal(true);
    });

    it('example tag test two', { tags: '@firstTag' }, () => {
        expect(true).to.equal(true);
    });

});