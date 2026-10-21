"""
Two sum

"""


class Solution: 
    def getTwoSum(self, nums: List[int], target: int) -> List[int]:
            seen = {}

            for i, num in enumerate(nums):
                remainder = num - target
                if remainder in seen: 
                    return [seen[remainder], i]
                else:
                    seen[num] = i 
            return []



