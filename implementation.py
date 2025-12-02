import platform
import os
from pathlib import Path
from collections import OrderedDict

print(platform.python_implementation())


class MyInt(int):
    def __new__(cls, value):
        print("Inside __new__", value)
        return super().__new__(cls, value * 2)  # Change object creation

    def __init__(self, value):
        print("Inside __init__", value)
        self.value = value

x = MyInt(3)
print(x)   # Output: 6


"""
Reverse a string
"""


s = "hello"
rev = ""

for char in s:
    rev =  char + rev

print(rev)  

"""
Find Duplicated in a list 
"""

nums = [1, 2, 3, 2, 4, 5, 1, 6]

seen = set()
duplicates = set()

for num in nums:
    if num in seen:
        duplicates.add(num)
    else:
        seen.add(num)

print(duplicates)  # {1, 2}


"""
Implement LRU cache
"""

class LRUCache:
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        # Move the key to the end to show that it was recently used
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            # Update and mark as recently used
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            # Pop the first item (least recently used)
            self.cache.popitem(last=False)

# Usage
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))  # 1
cache.put(3, 3)      # evicts key 2
print(cache.get(2))  # -1

"""
Write a function to check if two strings are anagrams.
"""


from collections import Counter

def are_anagrams(s1, s2):
    return Counter(s1) == Counter(s2)

# Example
print(are_anagrams("listen", "silent"))  # True
print(are_anagrams("hello", "world"))    


"""
List all the folders and files in a directory
"""


folder_path = "problems"

# Solution 1
print("Solution 1")

for root, dirs, files in os.walk(folder_path):
    print("📁 Directory:", root)

    for d in dirs:
        print("   📂 Sub-folder:", os.path.join(root, d))

    for f in files:
        print("   📄 File:", os.path.join(root, f))

# Solution 2
folder_path = Path(folder_path)
print("Solution 2")

if not folder_path.exists():
    print("❌ Path does not exist:", folder_path)
else:
    for item in folder_path.rglob("*"):
        if item.is_dir():
            print("📂 Folder:", item)
        elif item.is_file():
            print("📄 File:", item)
