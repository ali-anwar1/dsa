// Heap Sort Implementation
function heapSort(arr) {
    const n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // One by one extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root (max element) to end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

// To heapify a subtree rooted with node i which is an index in arr[]
function heapify(arr, heapSize, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // left child index
    const right = 2 * i + 2; // right child index

    // If left child is larger than root
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
        heapify(arr, heapSize, largest); // Recursively heapify the affected subtree
    }
}

// Example usage:
const arr = [12, 11, 13, 5, 6, 7];
console.log("Original array:", arr);

const sortedArr = heapSort(arr);
console.log("Sorted array:", sortedArr);