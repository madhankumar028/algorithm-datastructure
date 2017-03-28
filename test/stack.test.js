import * as chai from 'chai';
import * as stack from '../datastructure/script/stack';

describe('Stack test suite', function() {

    var array = [1, 4, 5, 7];

    it('Pushing an element into stack', function() {
        
        var newArray = stack.push(array, 10);
        
        console.log(newArray);
    });

    it('Popping out an element from a stack', function() {

        var newArray = stack.pop(array, 10);

        console.log(newArray);
    });
});
    