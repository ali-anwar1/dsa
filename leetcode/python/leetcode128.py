class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_set = set(nums)
        longest = 0
        
        for n in num_set:
            # 2. Only start if 'n' is the absolute beginning of a sequence
            if (n - 1) not in num_set:
                length = 1
                # 3. Look forward. 'length' grows, ensuring no infinite loop
                while (n + length) in num_set:
                    length += 1
                
                # 4. Record the peak sequence length
                longest = max(longest, length)
                
        return longest




sol = Solution()
print(sol.longestConsecutive([100, 4, 200, 1, 3, 2]))  # Output: 4  