"""
Valid Parenthesis
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:
"""

class Solution:

    def isValid(self, s: str)-> bool:
        stack = []
        closeToOpen = {')': '(', '}': '{', ']': '['}

        for c in s:
            if c in closeToOpen:
                if stack and stack[-1] == closeToOpen[c]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)

        return True if not stack else False 
                


sol = Solution()
test_data = "()[]{}"
expected = True

test_data1 = "([)]"
expected1 = False

test_data2 = "{[]}"
expected2 = True    

def test(test_data, expected):
    output = sol.isValid(test_data)
    if output == expected:
        print("Passed:")
    else:
        print("Failed:")
    print("Expected", expected)
    print("Output", output) 

test(test_data, expected)
test(test_data1, expected1)
test(test_data2, expected2)