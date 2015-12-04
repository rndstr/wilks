'use strict';
let expect = require('chai').expect;
let wilks = require('../src/wilks');

describe('wilks coefficient', () => {
    describe('#wilksMale', () => {
        it('is within 0.01 of correct value', () => {
            expect(wilks.wilksMale(100)).to.be.gt(0.60).and.lt(0.61);
        });
    });
    describe('#wilksFemale', () => {
        it('is within 0.01 of correct value', () => {
            expect(wilks.wilksFemale(50)).to.be.gt(1.28).and.lt(1.29);
        });
    });
});