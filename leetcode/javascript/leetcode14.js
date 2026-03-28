// 14. Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        console.log("Comparing prefix", prefix, "with", strs[i])
        while (!strs[i].startsWith(prefix)) {
            console.log("Prefix", prefix, "does not start with", strs[i])
            prefix = prefix.slice(0, -1);
            console.log("Updated prefix:", prefix)
            if (prefix === "") return "";
        }
    }

    return prefix;
};

function test(testData, expected) {
    const output = longestCommonPrefix(testData)
    if (JSON.stringify(output) == JSON.stringify(expected)) {
        console.log("Passed:")
    } else {
        console.log("Failed:")
    }
    console.log("Expected", expected)
    console.log("Output", output)
}

test(["flower", "flow", "flight"], "fl")
test(["dog", "racecar", "car"], "")
test(["flow", "flight", "flower",], "fl")
test(["interspecies", "interstellar", "interstate"], "inters")