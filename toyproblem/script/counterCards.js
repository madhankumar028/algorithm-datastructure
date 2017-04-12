/**
* Author MadhankumarJ<madhankumar028@gmail.com>
*
* CounterCards problem in Freecodecamp
*/

var count = 0;

export function cc(card) {  
    checkForBet(card);
    return count > 0 ? `${count} Bet`: `${count} Hold`;
}

function checkForBet(card) {

    let positive = [2, 3, 4, 5, 6],
        neutral  = [7, 8, 9],
        negative = [10, 'J', 'Q', 'K', 'A'];
    
    positive.forEach(function(item) {
        if (item === card)
            count++;
        return;  
    });
    
    neutral.forEach(function(item) {
        if (item === card)
            return;
    });

    negative.forEach(function(item) {
        if (item === card)
            count--;
        return;
    });
}
