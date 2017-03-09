/*
Two sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

/**
 * @param {Object} nums
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
 * @param {number} number 
 * @param {Object} arr 
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
