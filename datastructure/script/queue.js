/**
 * Author Madhankumar<madhankumar028@gmail.com>
 */

/**
 * 
 * @param {Array}  queue 
 * @param {Number} newElement 
 */
export function enqueue(queue, newElement) {
    let rear = queue.length;
    queue[rear] = newElement;

    return queue;
}

/**
 * 
 * @param {Array}  queue 
 * @param {Number} popElement 
 */
export function dequeue(queue, popElement) {    
    let rear = queue.length;
    queue.splice(rear - rear, 1);
    
    return queue;
}