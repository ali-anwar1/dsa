/**
 * In Node.js, setTimeout(callback, 0) and setImmediate(callback) both schedule asynchronous tasks for the "near" future, but they operate in different phases of the event loop
 * Runs in the Timers phase at the start of the loop.
 * Unpredictable if called from the main module.
 */
setTimeout(() => {
    console.log('setTimeOut with 0 ms')
}, 0)

/**
 * Runs in the Check phase after I/O events.
 * Guaranteed to run before timers if called within an I/O callback.
 * Primarily a Node.js feature; not standard in most browsers.
 * process.nextTick(): Executes immediately after the current operation finishes, before the event loop continues to the next phase. It has higher priority than both setTimeout and setImmediate.
 */
setImmediate(() => {
    console.log('setImmediate')
});

/**In the code provided, the execution order is unpredictable and non-deterministic. When both are called from the top-level (main module) of a Node.js script, either one could run first. */
