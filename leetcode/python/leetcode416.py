"""
Dynamic Programming: One Knapsack

Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
"""


from typing import List

class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        if sum(nums) % 2:
            return False
        dp = set([0])
        dp.add(0)
        target = sum(nums) // 2
        for i in range(len(nums) - 1, -1, -1):
            nextDp = set([])
            for t in dp:
                if(t + nums[i]) == target:
                    return True
                nextDp.add(t + nums[i])
                nextDp.add(t)
            dp = nextDp
        return True if target in dp else False



solution = Solution()

print(solution.canPartition([1,5,11,5]), "== True")
print(solution.canPartition([3,3,3,4,5]),  "== True")
print(solution.canPartition([1,5,11,5, 1]), "== False")

