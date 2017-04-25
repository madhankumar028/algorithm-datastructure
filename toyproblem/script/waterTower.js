/**
 * Author MadhankumarJ<madhankumar028@gmail.com>
 * 
 * WaterTower Problem
 * 
 * Input: [1,0,3,2] (width of each tower is 1 unit), Output: 1 units
 * 
 */
// @flow
export function calculateWaterUnits(heights: Array<Number>) {
    
    var isTowerSorted = isSorted(heights);
    
    if (isTowerSorted) {
        return 'No units of water has been collected between these towers';
    }
    
    calculateTowersDifference(heights);
}

function isSorted(heights) {
    var sortedHeights = heights.sort();
        
    heights.forEach(function(height, index) {        
        return height === sortedHeights[index];                
    });
}

function calculateTowersDifference(heights) {
    for ( let i = 0; i < heights.length; i++ ) {
        for ( let j = i + 1; j < heights.length; j++ ) {
                        
        }
    }
}