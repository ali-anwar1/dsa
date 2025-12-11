class ArrayProcessor {
    // Method to process a single chunk
    processChunk(chunk, multiplier) {
        return chunk.map(num => num * multiplier);
    }

    // Method to process all chunks with array, chunkSize, and multiplier as arguments
    processAllChunks(array, chunkSize, multiplier) {
        const results = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            const chunk = array.slice(i, i + chunkSize);
            // Bind 'this', chunk, and multiplier to the processChunk method
            const process = this.processChunk.bind(this, chunk, multiplier);
            results.push(process()); // Call the bound function
        }
        return results.flat();
    }
}

// Usage
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const processor = new ArrayProcessor();

// Process array in chunks of 3 with multiplier 10
const processedArray = processor.processAllChunks(myArray, 3, 10);
console.log(processedArray);
// Output: [10, 20, 30, 40, 50, 60, 70, 80, 90]