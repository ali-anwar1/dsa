const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("first"), 3000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("second"), 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error: this promise cannot be complete"), 2000);
});

// Should implement and work to resolve both promises by imitating Promise.all functionality. Don’t use Promise.all.
/**
 * Manual implementation of Promise.all
 * @param {Array} promises - An array of promises or values
 * @returns {Promise}
 */
function manualPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        // Edge case: if input is not iterable or is empty
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Input must be an array"));
        }

        const results = [];
        let completedPromises = 0;

        if (promises.length === 0) {
            return resolve(results);
        }

        promises.forEach((promise, index) => {
            // Use Promise.resolve to handle non-promise values in the array
            Promise.resolve(promise)
                .then((value) => {
                    // Store the result at the specific index to maintain order
                    results[index] = value;
                    completedPromises++;

                    // Only resolve when all promises are finished
                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    // Fail-fast: reject the entire manualPromiseAll if any one fails
                    reject(error);
                });
        });
    });
}


manualPromiseAll([p1, p2])
    .then((results) => {
        console.log(results); // ["first", "second"]
    })
    .catch((error) => {
        console.error("One of the promises failed:", error);
    });


manualPromiseAll([p1, p2, p3])
    .then((results) => {
        console.log(results); // ["first", "second"]
    })
    .catch((error) => {
        console.error("One of the promises failed:", error);
    });

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log(results); // ["first", "second"]
    })
    .catch((error) => {
        console.error("One of the promises failed:", error);
    });