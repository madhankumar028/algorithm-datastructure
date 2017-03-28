var maxSize = 10,
    minSize = 0;

export function push(array, element) {
    
    var isStackFull = checkForOverflow(array),
        top = array.length;

    if (isStackFull) {
        array[top] = element;        
    } else {
        return 'The stack is overflow';
    }
        
    return array;
}

export function pop(array, element) {

    var isStackEmpty = checkForUnderflow(array),
        top = array.length;
    
    if (element !== top - 1)
        return 'Target element is not in the top of the stack';

    if (isStackEmpty)
        array.splice(top - 1, 1);

    return array;
}

function checkForOverflow(array) {
    return array.length > maxSize ? false : true;
}

function checkForUnderflow(array) {
    return array.length > minSize ? false : true;
}