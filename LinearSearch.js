// Function to perform linear search
// Time complexity - O(n) - Linear time complexity
// Space Complexity - O(1) - Constant space complexity

function linearSearch(array, target){

    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

const array = [1,2,3,4,5,6,7,8,9,10];

const target = 6;

const index = linearSearch(array, target);

if(index >= 0){
    console.log(target, " is present at index: ", index ," in thr given array: ", array);
}
else{
    console.log(target, " not found as the index calculated is: ", index);
}