"""
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5
"""



def findMedianSortedArrays(nums1, nums2) -> float:
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1

        m, n = len(nums1), len(nums2)
        total = m + n
        half = total // 2
        left, right = 0, m 

        while True:
            i = (left + right) // 2
            j = half - i

            left1 = nums1[i - 1] if i > 0 else float('-inf')
            right1 = nums1[i] if i < m else float('inf')

            left2 = nums2[j - 1] if j > 0 else float('-inf')
            right2 = nums2[j] if j < n else float('inf')

            if left1 <= right2 and left2 <= right1: 
                if total % 2: 
                    return float(min(right1, right2))
                return (max(left1, left2) + min(right1, right2)) / 2.0
            if left1 > right2:
                right = i -1
            else:
                left = i+1

                  

print(findMedianSortedArrays([1,2, 3, 4, 5], [6,7]), ' = 4')
print(findMedianSortedArrays([1,3], [2]), ' = 2')
print(findMedianSortedArrays([1,2], [3, 4]), ' = 2.5')
print(findMedianSortedArrays([1,2, 3], [4, 5]), ' = 3')
print(findMedianSortedArrays([1,2, 3], [4, 5, 6, 7, 8, 9, 10, 11]), ' = 6')
print(findMedianSortedArrays([1,3, 4, 5, 6, 7, 10], [2, 8, 9,11]), ' = 6')
print(findMedianSortedArrays([1,2, 3, 4, 5, 6, 7, 8], [1,2, 3, 4, 5]), ' = 4')