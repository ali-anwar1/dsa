// 11. Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length - 1, maxArea = 0;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const width = right - left
        const area = h * width

        maxArea = Math.max(maxArea, area)

        // Move the smaller height pointer
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1
        }
    }

    return maxArea;
};


function test(testData, expected) {
    const output = maxArea(testData)
    if (JSON.stringify(output) == JSON.stringify(expected)) {
        console.log("Passed:")
    } else {
        console.log("Failed:")
    }
    console.log("Expected", expected)
    console.log("Output", output)
}

test([1, 8, 6, 2, 5, 4, 8, 3, 7], 49) 