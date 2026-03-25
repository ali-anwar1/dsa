// 442. Find All Duplicates in an Array
package main

import (
	"fmt"
	"reflect"
)

func findDuplicates(nums []int) []int {
	results := []int{}

	for i := 0; i < len(nums); i++ {
		num := nums[i]
		index := abs(num) - 1

		if nums[index] < 0 {
			results = append(results, abs(num))
		} else {
			nums[index] = -nums[index]
		}
	}

	return results
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func test(testData []int, expected []int) {
	// Copy array because function mutates it
	inputCopy := make([]int, len(testData))
	copy(inputCopy, testData)

	output := findDuplicates(inputCopy)

	if reflect.DeepEqual(output, expected) {
		fmt.Println("Passed:")
	} else {
		fmt.Println("Failed:")
	}
	fmt.Println("Expected:", expected)
	fmt.Println("Output:", output)
}

func main() {
	test([]int{4,3,2,7,8,2,3,1}, []int{2,3})
}