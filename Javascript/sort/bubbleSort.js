const myList = [64, 34, 25, 12, 22, 11, 90, 5, 4, 3, 2, 1, 8, 9, 7, 10];
const myList1 = [64, 34, 25, 12, 22, 11, 90, 5, 4, 3, 2, 10, 9, 8, 7, 6, 13, 1, 12, 14, 15, 16, 17];
const myList2 = [64, 34, 25, 12, 22, 11, 90, 5, 4, 3, 2, 10, 9, 8, 7, 6, 13, 1, 12, 14, 15, 16, 17, 101, 99, 100, 102, 110, 210, 220, 310];

/**
 * Bubble Sort: Optimization
 * ⏱ Time complexity:
    •	O(n²)
   Space complexity:
    •	O(1) space
 */

const bubbleSort = ([...arr]) => {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Correct swap
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

    }
    return arr;
}

console.time("bubbleSort");
bubbleSort(myList)
bubbleSort(myList1);
bubbleSort(myList2);
console.timeEnd("bubbleSort");


/**
 * ⏱ Time complexity:
    •	Best case (already sorted): O(n)
    •	Worst case: O(n²)
   Space complexity:
    •	O(1) space
 */
function bubbleSortOptimized([...arr]) {
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // After each pass, the largest element is at the end,
        // so we reduce the inner loop range by i.
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
                swapped = true;
            }
        }

        // If no swaps happened, the array is already sorted → break early.
        if (!swapped) break;
    }

    return arr;
}

console.log("Optimized Bubble Sort: ")
console.time("bubbleSortOptimized");
bubbleSortOptimized(myList);
bubbleSortOptimized(myList1);
bubbleSortOptimized(myList2);
console.timeEnd("bubbleSortOptimized");



/**
 * Bubble Sort: Optimization
 */

function bubbleSortOptimizedNamed([...arr]) {
    let n = arr.length;
    let swapped;
    outerLoop: // this is outer loop
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        // After each pass, the largest element is at the end,
        // so we reduce the inner loop range by i.
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
                swapped = true;
            }
        }
        if (!swapped) break outerLoop;
    }

    return arr;
}



console.log("Optimized Bubble Sort: ")
console.time("bubbleSortOptimizedNamed");
bubbleSortOptimizedNamed(myList);
bubbleSortOptimizedNamed(myList1);
bubbleSortOptimizedNamed(myList2);
console.timeEnd("bubbleSortOptimizedNamed");


/**
 * ⏱ Time complexity:
    •	Best case (already sorted): O(n)
    •	Worst case: O(n²)
   Space complexity:
    •	O(1) space
 */
function bubbleSortOptimizedWithWhile([...arr]) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;

        // After each pass, the largest element is at the end,
        // so we reduce the inner loop range by i.
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
                swapped = true;
            }
        }
    } while (swapped)

    return arr;
}


console.log("Optimized Bubble Sort: bubbleSortOptimizedWithWhile")
console.time("bubbleSortOptimizedWithWhile");
bubbleSortOptimizedWithWhile(myList);
bubbleSortOptimizedWithWhile(myList1);
bubbleSortOptimizedWithWhile(myList2);
console.timeEnd("bubbleSortOptimizedWithWhile");