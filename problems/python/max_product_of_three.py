import math

def max_product_of_three(nums):
    """
    Calculates the maximum product of three integers from a given array.

    Args:
        nums: A list of integers (can include negatives).

    Returns:
        The maximum product of three integers.
    """
    
    # Handle non-integer inputs or short arrays
    if not isinstance(nums, list) or len(nums) < 3:
        raise ValueError("Input must be a list of at least 3 integers")
    
    # Ensure all elements are integers
    try:
        nums = [int(n) for n in nums]
    except ValueError:
        raise ValueError("Input list must contain only valid integers")

    # Sort the list to easily identify potential candidates for the maximum product.
    nums.sort()
    n = len(nums)

    # The maximum product will either be:
    # 1. The product of the three largest positive numbers (if all are positive or mix).
    # 2. The product of the two most negative numbers (which when multiplied form a large positive number)
    #    and the single largest positive number.
    
    product1 = nums[n - 1] * nums[n - 2] * nums[n - 3]  # Product of three largest numbers
    product2 = nums[0] * nums[1] * nums[n - 1]          # Product of two smallest (most negative) and the largest number
    
    return max(product1, product2)

# Test cases:
input1 = [1, 5, 8, 11, 9]
input2 = [-10, -11, -1, 0, 5]
input3 = [-8, 0, 9, 10, 11]
# Note: the user's input4 had quotes around the numbers, handling that in the function
input4 = [-5, "-4", "-3", "-2", "-1"] 

print(f"Input 1: {input1}, Max product: {max_product_of_three(input1)}")
print(f"Input 2: {input2}, Max product: {max_product_of_three(input2)}")
print(f"Input 3: {input3}, Max product: {max_product_of_three(input3)}")
print(f"Input 4: {input4}, Max product: {max_product_of_three(input4)}")
