// Fibonacci

function printFibonacci(max){
    let n = 0
    let prev2 = 0;
    let prev1 = 1
    console.log(prev2)
    console.log(prev1)
    while (n < max) {
        const newFibonacci = prev1 + prev2;
        console.log(newFibonacci)
        prev2 = prev1;
        prev1 = newFibonacci;
        n++
    }
} 



/**
 * Time complexity:
 *  Exponential O(2^n)
 * Space Complexity:
 *  Linear O(n)
 */

function findFibonacci(n){
    if(n <= 1) return n;

    return findFibonacci(n - 1) + findFibonacci(n - 2);
} 

printFibonacci(19);
console.log(findFibonacci(19));