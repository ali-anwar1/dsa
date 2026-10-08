"""
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
"""


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {}
        for word in strs:
            key = ''.join(sorted(word))

            if key not in groups:
                groups[key] = []

            groups[key].append(word)

        return list(groups.values())



# tests cases
def test(test_data, expected):
    sol = Solution()
    output = sol.groupAnagrams(test_data)
    output_sorted = [sorted(group) for group in output]
    expected_sorted = [sorted(group) for group in expected]

    if sorted(output_sorted) == sorted(expected_sorted):
        print("Passed:")
    else:
        print("Failed:")
    print("Expected", expected)
    print("Output", output) 

test(["eat", "tea", "tan", "ate", "nat", "bat"], [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]])