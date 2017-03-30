import * as chai from 'chai';
import * as stack from '../datastructure/script/stack';

describe('Stack test suite', function() {

    var stackArray = [1, 4, 5, 7];

    it('Pusing into stack', function() {
        var newArray = stack.push(stackArray, 10);
        chai.assert.sameMembers(stackArray, newArray,
                    `new element isn't inserted into the stack`);        
    });

    it('Pushing into overflowed stack', function() {        
        var overflowArray = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 0],
            newArray;

        newArray = stack.push(overflowArray, 12);
        
        chai.assert.sameMembers(overflowArray, newArray, 'the stackoverflow push not allowed');
    });

    it('Popping out from stack', function() {
        var newArray = stack.pop(stackArray, 10);
        chai.assert([1, 4, 5, 7], newArray, 'the target is not removed from the stack');
    });

    it('Popping out from empty stack', function() {
        var underflowArray = [],
            newArray;

        newArray = stack.pop(underflowArray, 2);
        chai.assert.sameMembers(underflowArray, newArray, 'the stack is empty');
    });
});
    