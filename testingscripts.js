const fs = require('fs');
const path = require('path');

const testFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js') && file !== 'testingscripts.js');

testFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    const module = require(filePath);
    describe(file, () => {
        Object.keys(module).forEach(key => {
            it(`${key} should be a function`, () => {
                expect(typeof module[key]).toBe('function');
            });
        });
    });
});

const script = require(path.join(__dirname, 'testingscripts.js'));
describe('testingscripts.js', () => {
    Object.keys(script).forEach(key => {
        it(`${key} should be a function`, () => {
            expect(typeof script[key]).toBe('function');
        });
    });
});
