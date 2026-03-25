# 11. Container With Most Water

class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        max_area = 0

        while left < right:
            h = min(height[left], height[right])
            width = right - left
            area = h * width

            max_area = max(max_area, area)

            # Move the smaller height pointer
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return max_area
        
sol = Solution()

def test(test_data, expected):
    output = sol.maxArea(test_data)
    if output == expected:
        print("Passed:")
    else:
        print("Failed:")
    print("Expected", expected)
    print("Output", output)   







test([1,8,6,2,5,4,8,3,7], 49) 