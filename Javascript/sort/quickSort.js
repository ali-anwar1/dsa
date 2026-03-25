function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            // swap array[i] and array[j]
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // swap array[i+1] and array[high]
    [array[i + 1], array[high]] = [array[high], array[i + 1]];

    return i + 1;
}

function quicksort(array, low = 0, high = null) {
    if (high === null) {
        high = array.length - 1;
    }

    if (low < high) {
        const pivotIndex = partition(array, low, high);
        quicksort(array, low, pivotIndex - 1);
        quicksort(array, pivotIndex + 1, high);
    }

    return array; // optional, convenient to return
}


const arr = [90, 89, 85, 81, 80, 79, 78, 77, 75, 70, 100, 102, 111, 64, 34, 25, 12, 22, 11, 90, 5, 4, 3, 2, 10, 9, 8, 7, 6, 13, 1, 12, 14, 15, 16, 17, 103, 104, 102, 91, 91];


console.log(quicksort(arr));