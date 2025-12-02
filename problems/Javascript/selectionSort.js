const myList = [90, 89, 85, 81, 80, 79, 78, 77, 75, 70, 100, 102, 111, 64, 34, 25, 12, 22, 11, 90, 5, 4, 3, 2, 10, 9, 8, 7, 6, 13, 1, 12, 14, 15, 16, 17];


/**
 * Classic Selection Sort
 * ⏱ Time complexity:
    •	O(n²)
   Space complexity:
    •	O(1) space
 */
const selectionSort = ([...arr]) => {

    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;

        // find index of minimum element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // swap after inner loop ends
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

/**
 * Optimized Selection Sort: Minor performance gain
 * Optimization mostly reduces unnecessary swaps, not the comparisons.
 * ⏱ Time complexity:
    •	O(n²)
   Space complexity:
    •	O(1) space
 */
const selectionSortOptimized = ([...arr]) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // find index of minimum element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // swap only if needed
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

console.time("bubbleSort");
selectionSort(myList)
console.timeEnd("bubbleSort");

console.time("bubbleSortOptimized");
selectionSortOptimized(myList)
console.timeEnd("bubbleSortOptimized");
