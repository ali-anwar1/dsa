"""
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
"""
from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {}
        for word in strs:
            key = ''.join(sorted(word))

            if key not in groups:
                groups[key] = []

            groups[key].append(word)

        return list(groups.values())
    
    def groupAnagrams2(self, strs: List[str]) -> List[List[int]]:
        res = defaultdict(list)

        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord("a")] += 1

            res[tuple(count)].append(s) 

        return list(res.values())



# tests cases
def test(test_data, expected):
    sol = Solution()
    output = sol.groupAnagrams(test_data)    
    output_sorted = [sorted(group) for group in output]
    expected_sorted = [sorted(group) for group in expected]
    output2 = sol.groupAnagrams2(test_data)
    print('output2', output2)

    if sorted(output_sorted) == sorted(expected_sorted):
        print("Passed:")
    else:
        print("Failed:")
    print("Expected", expected)
    print("Output", output) 

test(["eat", "tea", "tan", "ate", "nat", "bat"], [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]])

