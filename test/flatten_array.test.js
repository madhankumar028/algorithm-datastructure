import * as chai from 'chai';
import * as flatten from '../algorithm/script/flatten_array.js';

describe('Flatten test suite', function() {

	it('flatten test spec', function() {
		
		var array =  [1,2,[3,4,[5,6, 4, 5],7,[8,9]]];
		var flattenedArray = flatten.flattenArray(array);
	});
});
