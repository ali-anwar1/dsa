# 442. Find All Duplicates in an Array

class Solution(object):
    def findDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        results = []

        for num in nums:
            index = abs(num) - 1
            if nums[index] < 0:
                results.append(abs(num))
            else:
               nums[index] = - nums[index]
        return results


sol = Solution()

def test(test_data, expected):
    output = sol.findDuplicates(test_data)
    if output == expected:
        print("Passed:")
    else:
        print("Failed:")
    print("Expected", expected)
    print("Output", output)   







test([4,3,2,7,8,2,3,1], [2,3])    
