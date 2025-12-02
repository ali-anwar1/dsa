/**
 * Merge two array
 * @param {Array<string | number>} left 
 * @param {Array<string | number>} right
 * @returns 
 */

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}


// const myList2 = [64, 34, 25, 12, 22, 11, 90, 5, 4, 3, 2, 10, 9, 8, 7, 6, 13, 1, 12, 14, 15, 16, 17, 101, 99, 100, 102, 110, 210, 220, 310];


// console.time("mergeSort")
// mergeSort(myList2);
// console.timeEnd("mergeSort")

