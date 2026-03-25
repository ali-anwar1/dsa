nums =  [10, 20, 30, 40, 50, 60, 70, 80, 90]
print('==========================')
for i in range(len(nums) - 1, -1, -1):
    print(i, nums[i])

for i in range(len(nums) - 1, -1, -3):
    print(nums[i], nums[i-1], nums[i-2])

print('-------------------------')

for i in range(len(nums)):
    print(i, nums[i])

for i in range(0, len(nums), 3):
    chunk = nums[i:i+3]  # Slices safely
    print(*chunk)  

print('========================')