import * as chai from 'chai';
import * as twosum from '../algorithm/script/twosum.js';

describe('TwoSum test suite', function() {

    it('test for twosum function', function() {
        
        var numbers = [5, 2, 7 ,10, 4],
            target = 6,
            result;

        result = twosum.checkForTwoSum(numbers, target);
        
        chai.assert.sameMembers(result, [2, 4], 'twosum failed');
    });
});
    