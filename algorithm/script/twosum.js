/**
 * @param {number[]} nums
 * @param {number} target
 * 
 */
export function checkForTwoSum(nums, target) {
    
    var isTwoSum;
    nums.some(function(num) {
        isTwoSum = compare(num, nums, target);
        if (isTwoSum) {
            return isTwoSum;
        }
    });
    
    return isTwoSum;
}

/**
 * 
 * @param {number[0]} number 
 * @param {number[]} arr 
 * @param {number} target 
 */
function compare(number, arr, target) {
    
    var array = [],
        sum;
    
    for (var i = 1; i < arr.length; i++) {        
        sum = arr[i] + number;        
        if (sum == target) {
            array.push(number);
            array.push(arr[i]);
            return array;
        }
    }
}
