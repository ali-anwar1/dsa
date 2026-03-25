

/** AVL Trees
 * Self-balancing BST (difference of left & right heights ≤ 1).
 * Maintain BST efficiency for dynamic data.
 * Rotations to keep tree balanced during insert/delete.
 */


/**
 * Nodes (vertices) + connections (edges).
 * Directed / Undirected
 * Weighted / Unweighted
 */


/**
 * Linear Search
 */


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}


/**
 * Binary Search
 */

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}