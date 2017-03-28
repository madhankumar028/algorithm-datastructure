var maxSize = 10,
    minSize = 0;

export function push(stack, element) {   
    var isStackFull = checkForOverflow(stack),
        top = stack.length;

    if (isStackFull) {
        stack[top] = element;        
    } else {
        return 'The stack is overflow';
    }
        
    return stack;
}

export function pop(stack, element) {
    var isStackEmpty = checkForUnderflow(stack),
        top = stack.length;    

    if (isStackEmpty) {
        stack.splice(top - 1, 1);        
    } else {
        return 'the stack is empty';
    }

    return stack;
}

function checkForOverflow(stack) {
    return stack.length > maxSize ? false : true;
}

function checkForUnderflow(stack) {    
    return stack.length === minSize ? false : true;
}