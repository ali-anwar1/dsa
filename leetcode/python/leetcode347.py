"""
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]

"""

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums) + 1) ]
        
        for n in nums:
            count[n] = 1 + count.get(n, 0)

        for n, c in count.items():
            print(n, c)
            freq[c].append(n)

        print(freq)
        res = []

        for i in range(len(freq) - 1, 0, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res;


    def topKFrequentWithoutBucketSort(self, nums: List[int], k: int) -> List[int]:
            frequencies = {}
            freq = [[] for i in range(len(nums) + 1) ]
            for num in nums:
                if frequencies.get(num, 0) > 0:
                    frequencies[num] = frequencies[num] + 1
                else:
                    frequencies[num] = 1
            
            sorted_keys = sorted(frequencies, key=frequencies.get, reverse=True)
                
            return sorted_keys[:k]









solution = Solution()
print(solution.topKFrequent([1,1,1,2,2,3], 2))  # Output: [1, 2]

print(solution.topKFrequent([1,1,1,2,2,3,3,3,3,3,3,3,3,3,3,3,4, 4], 2))  # Output: [1, 2]

print(solution.topKFrequentWithoutBucketSort([1,1,1,2,2,3], 2))  # Output: [1, 2]

print(solution.topKFrequent([1], 1))  # Output: [1] 

