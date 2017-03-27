import * as chai from 'chai';
import * as confirm from '../algorithm/script/confirmending';

describe('Freecode ConfirmEnding test suite', function() {

    it('target endsWith', function() {
        
        var result = confirm.confirmEnding(`Bastian`, `n`);
        
        chai.assert.equal(result, true, 'target is not confirm ending');                
    });

    it ('target is substring', function() {

        var isSubString = confirm.confirmEnding(`Walking on water and developing software 
        					from a specification are easy if both are frozen`, `specification`);

        chai.assert.equal(isSubString, false, 'target is not substring');        
    });

    it ('target is lastword', function() {

        var isNotSubString = confirm.confirmEnding(`If you want to save our world, you must hurry.
        			We dont know how much longer we can withstand the nothing`, `mountain`);

        chai.assert.equal(isNotSubString, true, 'target is not lastword');        
    });
});
    