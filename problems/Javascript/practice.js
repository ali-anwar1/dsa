function test(myList2, results) {
    const sorted = [...myList2].sort((a, b) => a - b);
    const isEqual = sorted.length === results.length && sorted.every((val, idx) => val === results[idx]);
    return isEqual;
}


const myList2 = [64, 34, 25, 12, 22, 11, 90, 5, 4, 3, 2, 10, 9, 8, 7, 6, 13, 1, 12, 14, 15, 16, 17, 101, 99, 100, 102, 110, 210, 220, 310, 225, 26, 32, 43, 54, 55, 61, 69, 74, 76, 79, 77, 78, 81, 82, 89, 85, 90, 92, 95, 150, 141, 133];


/**
 * Bubble Sort is an algorithm that sorts an array from the lowest value to the highest value.
 * 1. Go through the array, one value at a time.
 * 2. For each value, compare the value with the next value.
 * 3. If the value is higher than the next one, swap the values so that the highest value comes last.
 * 4. Go through the array as many times as there are values in the array.
 */

/**
 * Bubble Sort
 * @param {Array} param0 
 * @returns 
 */

function bubbleSort([...arr]) {
    const l = arr.length;

    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

/**
 * Bubble Sort optimized
 * @param {Array} param0 
 * @returns 
 */
function bubbleSortOptimized([...arr]) {
    const l = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let j = 0; j < l - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}


/**
 * Bubble Sort
 * @param {Array} param0 
 * @returns 
 */

function selectionSort([...arr]) {
    const l = arr.length;

    for (let i = 0; i < l; i++) {
        let minIndex = i;

        for (let j = i + 1; j < l; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr;
}


function selectionSortOptimized([...arr]) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }

    return arr;
}


function insertionSort([...arr]) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let insertIndex = i;
        let currentValue = arr.splice(i, 1)[0];
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > currentValue) {
                insertIndex = j;
            }
        }
        arr.splice(insertIndex, 0, currentValue);
    }

    return arr;
}


/**
 * Quick Sort 
 */

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1;
}

function quickSort(arr, low = 0, high = null) {
    if (!high) high = arr.length - 1;


    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)

    }
    return arr;
}

/**
 * Counting Sort
 */

function countingSort(arr) {
    const maxVal = Math.max(...arr);
    const count = new Array(maxVal + 1).fill(0);
    // Build frequency array
    while (arr.length > 0) {
        const num = arr.shift();
        count[num]++;
    }
    // Rebuild sorted array
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr.push(i);
            count[i]--;
        }
    }
    return arr;
}


/** Radix Sort */
function radixSort(arr) {
    // Initialize radix buckets (0–9)
    let radixArray = [[], [], [], [], [], [], [], [], [], []];

    // Find the maximum value in the list
    const maxVal = Math.max(...arr);

    // Exponent (1s, 10s, 100s, ...)
    let exp = 1;

    while (maxVal / exp > 0) {

        // Distribute values into buckets
        while (arr.length > 0) {
            const val = arr.pop();
            const radixIndex = Math.floor(val / exp) % 10;
            radixArray[radixIndex].push(val);
        }

        // Collect values back from buckets
        for (const bucket of radixArray) {
            while (bucket.length > 0) {
                const val = bucket.pop();
                arr.push(val);
            }
        }

        exp *= 10;
    }
    return arr;
}





/**
 * Merge Sort 
 */

function merge(left, right) {
    const results = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            results.push(left[i])
            i++;
        } else {
            results.push(right[j])
            j++;
        }
    }
    return results.concat(left.slice(i)).concat(right.slice(j))
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    const left = mergeSort(leftHalf)
    const right = mergeSort(rightHalf)
    return merge(left, right);
}




console.time("bubbleSort")
console.log("Bubble Sort:", test(myList2, bubbleSort(myList2)));
console.timeEnd("bubbleSort")

console.time("bubbleSortOptimized")
console.log("Bubble Sort Optimized:", test(myList2, bubbleSortOptimized(myList2)));
console.timeEnd("bubbleSortOptimized")

console.time("selectionSort")
console.log("Selection Sort:", test(myList2, selectionSort(myList2)));
console.timeEnd("selectionSort")

console.time("selectionSortOptimized")
console.log("Selection Sort Optimized:", test(myList2, selectionSortOptimized([...myList2])));
console.timeEnd("selectionSortOptimized")

console.time("insertionSort")
console.log("Insertion Sort:", test(myList2, insertionSort([...myList2])));
console.timeEnd("insertionSort")


console.time("quickSort")
console.log("QuickSort Sort:", test(myList2, quickSort([...myList2])));
console.timeEnd("quickSort")
quickSort

console.log('Counting Sort:', countingSort([...myList2]))
console.log('RadixSort Sort:', radixSort([...myList2]))

console.time("mergeSort")
console.log("Merge Sort:", test(myList2, mergeSort([...myList2])));
console.timeEnd("mergeSort")