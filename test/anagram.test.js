import { chai } from 'chai';
import * as assert from 'assert';

import { checkForAnagram } from '../algorithm/script/anagram.js';

describe('Anagram test', function() {

    it('test for anagram function', function() {

        var charA = 'listen'.split('');
        var charB = 'silent'.split('');

        var isAnagram = charA.sort().compare(charB.sort());

        assert(isAnagram, `${charA} and ${charB} are not anagrams`);
        
        // assert(res, `${charA} and ${charB} are not anagrams`);
    });
});
    