const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('http://localhost:5001');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Node.js & Passport App');
    });
});