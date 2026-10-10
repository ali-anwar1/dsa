"""
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:
"""


class Solution:

    def encode(self, strs: List[str]) -> str:
        return ''.join([str(len(s))+ '#'+s for s in strs])


    def decode(self, s: str) -> List[str]:
        return []



sol = Solution()

print(sol.encode(["hello", "Dear, friend!"]))