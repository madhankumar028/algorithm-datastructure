/*
Anagram

Given two strings, check that both are anagram.

Example: (Listen and Silent are anagrams)

*/

/**
 * 
 * @param {string} wordA 
 * @param {string} wordB 
 */
export function checkForAnagram(wordA, wordB) {

    if (wordA.length !== wordB.length) {
        return null;
    }

    var result = checkForSameCharcter(wordA, wordB);
}

function checkForSameCharcter(stringA, stringB) {

    // stringA.split('').forEach(function(item) {

    // });

    for (var i = 0;  i < stringA.split('').length; i++) {
        for (var j = 0; j < stringB.split('').length; j++) {
            
        }
    }
}
