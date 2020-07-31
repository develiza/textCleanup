should = require('chai').should();
expect = require('chai').expect;
log = console.log;

const {
    textCleanup
} = require('../helpers/textCleanup.js');

describe('#basic test', () => {
    true.should.be.true;
});

describe('#test textClearnup helper', () => {
    it('should not contain multiple spaces between, before and after strings', () => {
        textCleanup('    bla  bla   ').should.equal(' bla bla ');
    });
    it('should remove spaces before dots', () => {
        textCleanup('Ola .').should.equal('Ola.')
    });
    it('should remove spaces before question marks', () => {
        textCleanup('Ola ?').should.equal('Ola?')
    });
    it('should remove spaces before exclamation', () => {
        textCleanup('Ola !').should.equal('Ola!')
    });
    it('should add spaces after dots where there are none', () => {
        textCleanup('Ola.Que tal?').should.equal('Ola. Que tal?')
    });
    it('should add spaces after question marks where there are none', () => {
        textCleanup('Ola?Que tal?').should.equal('Ola? Que tal?')
    });
    it('should add spaces after exclamation where there are none', () => {
        textCleanup('Ola!Que tal?').should.equal('Ola! Que tal?')
    });
    it('should not remove line breaks', () => {
        textCleanup('Ola!\n\nQue tal?').should.equal('Ola!\n\nQue tal?')
    });
    it('should remove empty spaces immediately close to <>, such as in <hello>', () => {
        textCleanup('< Ola! Que tal? >').should.equal('<Ola! Que tal?>')
    });
});