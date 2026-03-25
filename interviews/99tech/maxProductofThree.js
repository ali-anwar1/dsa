/** write a program that can calculate product of three numbers */


function maxProductOfThree(arr) {
 
    if(!Array.isArray(arr)) return;
    if (arr.length < 3) return;

    const sortedArr = arr.sort((a, b) => a - b);
    const length = sortedArr.length;

  
    let a = sortedArr[length - 1];
    let b = sortedArr[length - 2];
    let c = sortedArr[length - 3];
    
    let d = sortedArr[0];
    let e = sortedArr[1];

    const product1 = a * b * c;
    const product2 =  d * e * a;

    return product1 > product2 ? [a, b, c] : [d, e, a];
}

const input1 = [1, 5, 8, 11, 9]
const input2 = [-10, -11, -1, 0, 5]
const input3 = [-8, 0, 9, 10, 11]


console.log(maxProductOfThree(input1))
console.log(maxProductOfThree(input2))
console.log(maxProductOfThree(input3))