const arr1 = [64, 34, 25, 12, 22, 11, 90, 5];
const arr2 = [64, 34, 25, 12, 22, 11, 90, 5, 4, 3, 2, 10, 9, 8, 7, 6, 13, 1, 12, 14, 15, 16, 17];
const arr3 = [64, 34, 25, 12, 22, 11, 90, 5, 4, 3, 2, 10, 9, 8, 7, 6, 13, 1, 12, 14, 15, 16, 17, 101, 99, 100, 102, 110, 210, 220, 310];
/**
 * Insertion Sort: 
 * ⏱ Time complexity:
    •	Best case O(n²)
    •	Average case O(n²)
    •	Worst case O(n²)
   Space complexity:
    •	O(1) space
 */

function insertionSort([...arr]) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let insert_index = i;
        let current_value = arr.splice(i, 1)[0];

        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > current_value) {
                insert_index = j;
            }
        }

        arr.splice(insert_index, 0, current_value);
    }
    return arr;
}
console.time("insertionSort")
insertionSort(arr1);
insertionSort(arr2);
insertionSort(arr3);
console.timeEnd("insertionSort")


/**
 * Insertion Sort: Optimization
 * ⏱ Time complexity:
    •	Best case O(n)
    •	Average case O(n²)
    •	Worst case O(n²)
   Space complexity:
    •	O(1) space
 */

function optimizedInsertionSort([...arr]) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        // Shift elements to the right until the correct spot is found
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }
    return arr;
}

console.time("optimizedInsertionSort")
optimizedInsertionSort(arr1);
optimizedInsertionSort(arr2);
optimizedInsertionSort(arr3);
console.timeEnd("optimizedInsertionSort")
