import * as chai from 'chai';
import * as belong from '../toyproblem/script/wheredoibelong.js';

describe('Where do I belong test suite', function() {

    var array = [10, 20, 30, 40, 50];

    it('Where do I belong (positive scenario)', function() {
        var num = 35,
            index;

        index = belong.getIndexToIns(array, num);
        chai.assert(index, 3, 'getIndexToIns behaviour has failed');
    });
});
