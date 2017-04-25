import * as chai from 'chai';
import * as waterTower from '../toyproblem/script/waterTower';

describe('Water Tower suite', function() {

    it('waterTower', function() {
        let heights = [1, 0, 3, 2],
            waterCollected;
        
        waterCollected = waterTower.calculateWaterUnits(heights);
    });
});