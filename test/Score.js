import { expect } from 'chai';
import Score from '../src/Score';
import TestUtils from 'react-addons-test-utils';

function textOf(reactElement) {
    return typeof reactElement.props.children === 'string' ?
            reactElement.props.children :
            reactElement.props.children.join('');
}

describe('Score', () => {
    describe('#renderWeight', () => {
        it('decorates with kg', () => {
            expect(textOf(Score.renderWeight(10))).to.equal('10kg', 'args=10');
            expect(textOf(Score.renderWeight(0))).to.equal('0kg', 'args=0');
        });
        it('accepts empty values and displays ? instead', () => {
            expect(textOf(Score.renderWeight(''))).to.equal('?kg', 'args=""');
            expect(textOf(Score.renderWeight(null))).to.equal('?kg', 'args=null');
            expect(textOf(Score.renderWeight(undefined))).to.equal('?kg', 'args=undefined');
        });
    });

    describe('#renderWilks', () => {
        it('rounds to two decimal points', () => {
            expect(textOf(Score.renderWilks(72.226))).to.equal('72.23');
            expect(textOf(Score.renderWilks(72.224))).to.equal('72.22');
        });
        it('accepts empty values and displays ? instead', () => {
            expect(textOf(Score.renderWilks(''))).to.equal('?');
            expect(textOf(Score.renderWilks(null))).to.equal('?');
            expect(textOf(Score.renderWilks(undefined))).to.equal('?');
        });
    });
});