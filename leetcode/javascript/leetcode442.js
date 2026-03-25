// 442. Find All Duplicates in an Array

    function findDuplicates(nums){

        const results = [];
        for(num of nums){
            const index = Math.abs(num) - 1;
            if(nums[index] < 0){
                results.push(Math.abs(num))
            }else {
                nums[index] = -nums[index]
            }
        }
        return results;
    }
    

function test(testData, expected){
    const output = findDuplicates(testData)
    if (JSON.stringify(output) == JSON.stringify(expected)){
        console.log("Passed:")
    }else{
        console.log("Failed:")
    }
    console.log("Expected", expected)
    console.log("Output", output)   
}






test([4,3,2,7,8,2,3,1], [2,3])    
