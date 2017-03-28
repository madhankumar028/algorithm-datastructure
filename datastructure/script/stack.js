export function push(array, element) {
    
    var isStackFull = checkForOverflow(array),
        top = array.length;

    if (isStackFull)
        array[top] = element;
        
    return array;
}

export function pop(array, element) {

    var isStackEmpty = checkForUnderflow(array),
        top = array.length;

    if (isStackEmpty)
        array.splice(top - 1, 1);

    return array;
}

function checkForOverflow(array) {
    return array.length > 10 ? false : true;
}

function checkForUnderflow(array) {
    return array.length === 0 ? false : true;
}