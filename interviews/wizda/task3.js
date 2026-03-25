/**
 * Write a program that returns the max product of 3 integers in a given array.

input1=[1,5,8,11,9], input2=[-10,-11,-1,0,5], input3=[-8, 0, 9, 10, 11],input4 = [-5, -4, -3, -2, -1],  output1= 792, output2=550, output3=990, output4 = -6
 * 
 */


function maxProductOfThree(nums) {
    // Sort the array in ascending order
    // Note: Default sort() treats elements as strings, so a compare function is needed
    nums.sort((a, b) => a - b);

    const n = nums.length;

    // Case 1: Product of the three largest numbers
    const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];

    // Case 2: Product of the two smallest (most negative) and the largest number
    const option2 = nums[0] * nums[1] * nums[n - 1];

    return Math.max(option1, option2);
}



/**
 * 
 */

console.log(maxProductOfThree([1, 5, 8, 11, 9]));
console.log(maxProductOfThree([-10, -11, -1, 0, 5]));
console.log(maxProductOfThree([-8, 0, 9, 10, 11]));
console.log(maxProductOfThree([-5, -4, -3, -2, -1]));

console.log(maxProductOfThree([1, 2, 3, 4]));

console.log('A');




setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
});

console.log('D');

queueMicrotask(() => {
    console.log('E');
});

setTimeout(() => {
    console.log('F');
}, 0);

console.log('G');