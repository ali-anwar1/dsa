
class Solution {

    constructor() {
    }

    encode(data) {
        return data.map(str => `${str.length}#${str}`).join('')
    }

    decode(s) {
        const res = []

        let i = 0;

        while (i < s.length) {
            let j = i;

            while (s[j] !== '#') {
                j++;
            }

            const length = parseInt(s.slice(i, j));
            res.push(s.slice(j + 1, j + 1 + length));
            i = j + 1 + length;
        }

        return res;


    }


}


const sol = new Solution();

const data = ["hello", "world"];
const encoded = sol.encode(data);

console.log(encoded)// Output: "5#hello5#world" 

const decoded = sol.decode(encoded);

console.log(decoded)// Output: ["hello", "world"]

if (JSON.stringify(decoded) === JSON.stringify(data)) {
    console.log("Test passed!");
}

