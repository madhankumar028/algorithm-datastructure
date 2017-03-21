import * as chai from 'chai';
import * as sort from '../algorithm/script/mergesort';

describe('Merge-sort algorithm', function() {

    it('merge sort spec', function() {

        let numbers = [1, 3, 4, 5, 7],
            strings = ['madhan', 'code', 'blog', 'javascript', 'this'];

        var numberSort = sort.mergeSort(numbers);
        
        chai.assert.sameMembers(numberSort, [1, 3, 4, 5, 7], 'merge sort is not working');
    });
});