# 14. Longest Common Prefix

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""

        for i in range(len(strs[0])):
            char = strs[0][i]
            print("char", char, "i", i)
            for s in strs[1:]:
                if i >= len(s) or s[i] != char:
                    return strs[0][:i]

        return strs[0]



def test(test_data, expected):
    sol = Solution()
    output = sol.longestCommonPrefix(test_data)
    if output == expected:
        print("Passed:")
    else:
        print("Failed:")
    print("Expected", expected)
    print("Output", output)


test(["flower","flow","flight"], "fl")
test(["dog","racecar","car"], "")
test(["ab", "a"], "a")