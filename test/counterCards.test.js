import * as chai from 'chai';
import * as counter from '../toyproblem/script/counterCards';

describe('Freecode Counter card suite', function() {
    it ('counter', function() {        
        counter.cc(2);
        counter.cc(3);
        counter.cc(4);
        counter.cc(5);
        
        let result = counter.cc(6);        
        chai.assert(result === '5 Bet', 'counter card failed');
    });
})