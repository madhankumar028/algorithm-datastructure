/**
 * Author Madhankumar<madhankumar028@gmail.com>
 */

import * as chai from 'chai';
import * as queue from '../datastructure/script/queue';

describe('Queue test suite', function() {
    var queueArray = [1, 2, 4, 5];
    
    it('Enqueue test', function() {
        var newQueue = queue.enqueue(queueArray, 10);
        chai.assert([1, 2, 4, 5, 10], newQueue,
                    'new element is not inserted into queue');
    });

    it('Dequeue test', function() {
        var newQueue = queue.dequeue(queueArray, 1);
        console.log(newQueue);
        chai.assert([2, 4, 5, 10], newQueue,
                    'Target element is removed from the queue');
    });
});