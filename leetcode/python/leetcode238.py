"""
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in 
O(n)
O(n) time without using the division operation?

"""

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        output = [1] * n 
        print("Initial output:", output)
        
        print(f"First {output}")
        left = 1
        for i in range(n):
            output[i] = left
            left *= nums[i]
            print(f"After processing index {i}, output: {output}, left: {left}")

        print("Output after left products:", output)

        right = 1
        for i in range(n - 1, -1, -1):
            output[i] *= right
            right *= nums[i]
            print(f"After processing index {i}, output: {output}, right: {right}")
        
        return output



sol = Solution()

print(sol.productExceptSelf([1, 2, 4, 6])) # Output: [48, 24, 12, 8]


print(sol.productExceptSelf([1, 2, 3, 4]))  # Output: [24, 12, 8, 6]




