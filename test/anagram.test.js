import { chai } from 'chai';
import * as assert from 'assert';

import * as anagram from '../algorithm/script/anagram.js';

describe('Anagram test', function() {

    it('test for anagram function', function() {

        var wordA = 'listen';
        var wordB = 'silent';

        assert.deepEqual(anagram.checkForAnagram(wordA, wordB), null);
        // anagram.checkForAnagram(wordA, wordB);
    });
});
    