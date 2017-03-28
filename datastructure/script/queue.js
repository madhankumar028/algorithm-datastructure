export function enqueue(queue, newElement) {
    var rear = queue.length;
    queue[rear] = newElement;

    return queue;
}

export function dequeue(queue, popElement) {
    
}