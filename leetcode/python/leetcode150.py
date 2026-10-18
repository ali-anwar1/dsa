class Solution: 
    def hasDuplicates(self, nums: List[int]):
        hash_set = set()

        for num in nums:
            if num in hash_set:
                return True
            hash_set.add(num)
        return False




sol = Solution()
print(sol.hasDuplicates([1, 2, 3, 4, 5]))
print(sol.hasDuplicates([1, 2, 3, 4, 5, 1]))
