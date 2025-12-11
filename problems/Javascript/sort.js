const myList2 = [64, 34, 25, 12, 22, 11, 90, 5, 4, 3, 2, 10, 9, 8, 7, 6, 13, 1, 12, 14, 15, 16, 17, 101, 99, 100, 102, 110, 210, 220, 310, 225, 26, 32, 43, 54, 55, 61, 69, 74, 76, 79, 77, 78, 81, 82, 89, 85, 90, 92, 95, 150, 141, 133];

function test(myList2, results = [], fName) {
    const sorted = [...myList2].sort((a, b) => a - b);
    const isEqual = sorted.length === results.length && sorted.every((val, idx) => val === results[idx]);
    if (isEqual) {
        console.info(`✅ Passed ${fName}`);
        return true;
    }
    console.error(`❌ Failed ${fName}, Test failed:`);
    console.error('Received: ', results);
    console.info('Expected: ', sorted);
}

function runSort(fn, data = myList2) {
    const fName = fn.name;
    console.time(fName);
    const result = fn([...data]);
    console.timeEnd(fName);
    test(data, result, fName);
}

/** Merge Sort 
 * 1. Divide the unsorted array into two sub-arrays, half the size of the original.
 * 2. Continue to divide the sub-arrays as long as the current piece of the array has more than one element.
 * 3. Merge two sub-arrays together by always putting the lowest value first.
 * 4. Keep merging until there are no sub-arrays left.
*/


function merge(left, right) {
    const results = []
    let i = 0, j = 0;
    const n = left.length;
    const l = right.length;

    while (i < n && j < l) {
        if (left[i] < right[j]) {
            results.push(left[i]);
            i++;
        } else {
            results.push(right[j])
            j++;
        }
    }

    return results.concat(left.slice(i)).concat(right.slice(j));
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid)

    const left = mergeSort(leftArray)
    const right = mergeSort(rightArray);

    return merge(left, right);

}




/** Radix Sort
 * 1. Start with the least significant digit (rightmost digit).
 * 2. Sort the values based on the digit in focus by first putting the values in the correct bucket based on the digit in focus, and then put them back into array in the correct order.
 * 3. Move to the next digit, and sort again, like in the step above, until there are no digits left.
*/


function radixSort(arr) {
    // Initialize radix buckets (0–9)
    const radixArray = [[], [], [], [], [], [], [], [], [], []];
    const maxVal = Math.max(...arr);
    let exp = 1;

    while (maxVal / exp > 0) {
        while (arr.length > 0) {
            const val = arr.pop();
            const radixIndex = Math.floor(val / exp) % 10;
            radixArray[radixIndex].push(val);
        }

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
 * 1.Create a new array for counting how many there are of the different values.
 * 2.Go through the array that needs to be sorted.
 * 3.For each value, count it by increasing the counting array at the corresponding index.
 * 4.After counting the values, go through the counting array to create the sorted array.
 * 5.For each count in the counting array, create the correct number of elements, with values that correspond to the counting array index. */

function countSort(arr) {
    const maxVal = Math.max(...arr);
    const count = new Array(maxVal + 1).fill(0)
    while (arr.length > 0) {
        const num = arr.shift();
        count[num]++
    }
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr.push(i);
            count[i]--;
        }
    }
    /** Create the sorted array from count */
    return arr;
}


/**
 * Quick Sort
 * 1. Choose a value in the array to be the pivot element.
 * 2. Order the rest of the array so that lower values than the pivot element are on the left, and higher values are on the right.
 * 3. Swap the pivot element with the first element of the higher values so that the pivot element lands in between the lower and higher values.
 * 4. Do the same operations (recursively) for the sub-arrays on the left and right side of the pivot element.
 */


function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]]
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1;
}


function quickSort(arr, low = 0, high = null) {
    if (!high) {
        high = arr.length - 1;
    }

    if (low < high) {
        const pivotIndex = partition(arr, low, high)
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high)
    }

    return arr;
}

/**
 * Insertion Sort
 * 1. Take the first value from the unsorted part of the array.
 * 2. Move the value into the correct place in the sorted part of the array.
 * 3. Go through the unsorted part of the array again as many times as there are values.
 */

function insertionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let insertIndex = i;
        let currentValue = arr.splice(i, 1)[0];
        for (let j = i - 1; j >= 0; j--) {
            if(arr[j] > currentValue){
                insertIndex = j;
            }
        }
        arr.splice(insertIndex, 0, currentValue)
    }
    return arr;
}


/**
 * Selection Sort
 * 1. Go through the array to find the lowest value.
 * 2. Move the lowest value to the front of the unsorted part of the array.
 * 3. Go through the array again as many times as there are values in the array.
 */

function selectionSort(arr){
    const n = arr.length
    for (let i = 0; i < n; i++) {
        let minIndex = i;

        for (let j = i; j < n; j++) {
           if(arr[j] < arr[minIndex]){
             minIndex = j;
           } 
        }

        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    
    return arr;
}

/**
 * Bubble Sort
 * 1. Go through the array, one value at a time.
 * 2. For each value, compare the value with the next value.
 * 3. If the value is higher than the next one, swap the values so that the highest value comes last.
 * 4. Go through the array as many times as there are values in the array.} arr 
 * @returns 
 */

function bubbleSort(arr){
    const n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

runSort(mergeSort);
runSort(radixSort);
runSort(countSort);
runSort(quickSort);
runSort(insertionSort); 
runSort(selectionSort);
runSort(bubbleSort);
