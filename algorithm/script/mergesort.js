export function mergeSort(array) {

    if (array.length > 3) {
        
        let length  = array.length,
            mid     = Math.floor(length / 2),
            left    = array.slice(0, mid),
            right   = array.slice(mid, length);
        
        console.log(left, right);
        
        var sortedLeftNode  = leftSort(left);
        var sortedRightNode = rightSort(right);

        merge(sortedLeftNode, sortedRightNode);
    }
}

function leftSort(left) {

}

function rightSort(right) {

}

function merge(left, right) {

}