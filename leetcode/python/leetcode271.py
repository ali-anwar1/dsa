"""
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:
"""


class Solution:

    def encode(self, strs: List[str]) -> str:
        return ''.join([str(len(s))+ '#'+s for s in strs])


    def decode(self, s: str) -> List[str]:
        res = []

        i = 0

        while i < len(s):
            j = i
            while s[j] != '#':
                j += 1

            length = int(s[i:j])

            start_of_word = j + 1

            end_of_word = start_of_word + length

            print(s[start_of_word:end_of_word])
            res.append(s[start_of_word:end_of_word])
        
            i = end_of_word

        return res



sol = Solution()

strs = ["hello", "Dear, friend!"]
encoded_str = sol.encode(strs)
print(encoded_str)
decoded_str = sol.decode(encoded_str)
print(decoded_str)

if strs == decoded_str:
    print("Passed!")
