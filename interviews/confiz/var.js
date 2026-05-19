
// var Tricky questions
/**
 * 	1.	var i is function-scoped, so there is only one i shared across all iterations.
    2.	The loop runs synchronously, immediately incrementing i from 1 → 6.
    3.	Each setTimeout schedules a callback with 0ms delay.
    •	Important: Even with 0ms, the callback does not run immediately.
    •	It goes to the macrotask queue and executes after the current synchronous code finishes.
    4.	By the time the callbacks run, the loop is already finished, and i = 6.
    5.	Therefore, all callbacks print 6, just like the 1000ms version.
 */

for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}

// Output:
// 6
// 6
// 6
// 6
// 6

/**
 * 🗂️ Scope DifferenceThe core difference lies in how var and let handle variable scope.var is function-scoped.let is block-scoped.
 * 🧵 Why the var Loop Prints 6 Single Variable: The var keyword creates a single variable i shared by all loop iterations.Asynchronous Delay: setTimeout pushes the console.log(i) function to the event queue
 * Final Value: The loop finishes executing completely before any setTimeout callback runs.
 * Result: By the time the callbacks execute, the shared i has already reached 6
 * 🛑 Why the let Loop Prints 1 to 5
 * New Variable: The let keyword creates a brand-new variable i for every single iteration of the loop.Closures: Each setTimeout callback "remembers" the specific value of i from its own iteration
 * Result: The callbacks print their own captured values sequentially.
 */

for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}

// Output:
// 1
// 2
// 3
// 4
// 5


for (var i = 1; i <= 5; i++) {
    setTimeout((iCopy) => {
        console.log(iCopy);
    }, 0, i);
}

// Output:
// 1
// 2
// 3
// 4
// 5



for (var i = 1; i <= 5; i++) {
    (function (iCopy) {
        setTimeout(() => {
            console.log(iCopy);
        }, 1000);
    })(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5

for (var i = 1; i <= 5; i++) {
    (function (iCopy) {
        setTimeout(() => {
            console.log(iCopy);
        }, 0);
    })(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5

