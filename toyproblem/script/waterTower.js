/**
 * WaterTower Problem
 *
 * Author Madhankumar<madhankumar028@gmail.com>
 * 
 * Input: [1,0,3,2] (width of each tower is 1 unit), Output: 1 units
 * 
 */
export function calculateWaterUnits(heights) {
    
    var isTowerSorted;
    
    heights.forEach(function(tower) {
        isTowerSorted = isSorted(tower, heights);
    });

    if (isTowerSorted)
        return 'water is not collected';
    
    calculateTowersDifference(heights);
}

function isSorted(element, heights) {    

}

function calculateTowersDifference(heights) {
    for ( let i = 0; i < heights.length; i++ ) {
        for ( let j = 1; j < heights.length; j++ ) {
            
        }
    }
}