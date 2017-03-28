import * as chai from 'chai';
import * as stack from '../datastructure/script/stack';

describe('Stack test suite', function() {

    var array = [1, 4, 5, 7];

    it('Pushing an element into stack', function() {
        
        var newArray = stack.push(array, 10);
        
        chai.assert.sameMembers(array, [1, 4, 5, 7, 10],
                    `new element isn't inserted into the stack`);        
    });

    it('Stack overflow test (failurecase)', function() {
        
        var array = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 0, 10],
            newArray;

        newArray = stack.push(array, 12);
        
        chai.assert.sameMembers(array, newArray, 'the stackoverflow push not allowed');
    });

    it('Popping out an element from a stack', function() {
        var newArray = stack.pop(array, 10);
        chai.assert([1, 4, 5, 7], newArray, 'the target is not removed from the stack');
    });

    it('Popping out mid element from the stack (failure case)', function() {        
        var newArray = stack.pop(array, 4);
        chai.assert.sameMembers([1, 5, 7, 10], newArray,
                    'The target element is not top of the stack');       
    })
});
    