/**
 * Stack
 *
 * Author Madhankumar<madhankumar028@gmail.com>
 * 
 * A stack is a linear data structure that stores data in
 * sequential, LIFO (Last-in, First-out) order.
 *
 * A stack implementation will be able to add (push) or remove (pop) data.
 *
 */

var maxSize = 10,
    minSize = 0;

export function push(stack, element) {   
    let isStackFull = checkForOverflow(stack);

    if (isStackFull) {
        let top = stack.length;
        stack[top] = element;        
    } else {
        return 'The stack is overflow';
    }
        
    return stack;
}

export function pop(stack, element) {
    let isStackEmpty = checkForUnderflow(stack);    

    if (isStackEmpty) {
        let top = stack.length;
        stack.splice(top - 1, 1);
    } else {
        return 'the stack is empty';
    }

    return stack;
}

function checkForOverflow(stack) {
    return stack.length >= maxSize ? false : true;
}

function checkForUnderflow(stack) {    
    return !stack.length ? false : true;
}