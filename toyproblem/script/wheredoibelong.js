/**
* Author MadhankumarJ<madhankumar028@gmail.com>
*
* Freecodecamp Javascript's Algorithm
*
* Where Do I Belong
*
* Example:
* getIndexToIns([40, 60], 50) should return 1 (index).
*/

export function getIndexToIns(arr, num) {
    var index,
      sortedArray = arr.sort();  
    
    for (var i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === num)
        index = i; 
        if (sortedArray[i] < num)
        index = i + 1;
    }  
    return index;
}