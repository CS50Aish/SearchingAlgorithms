// Jump Search Algorithm
// Time Complexity - O(log n) - logarithmic time complexity

function jumpSearch(array, target){

    // Calculate the optimal block size
    let m = Math.floor(Math.sqrt(array.length));

    // Start the search from the beginning of the array
    let left = 0;
    let right = m;

    // Check if the elements is within the current block
    while(array[right] <= target && right < array.length){
        left = right;
        right += m;
        if(right >= array.length){
            right = array.length - 1;
        }
    }

    // Perform linear search within the found block
    for(let i = left; i <= right; i++){
        if(array[i] === target){
            return i;
        }
    }
    return -1; // Element not found
}

const array = [0,1,4,9,16,25,36,49,64,81];
const target = 36;
const index = jumpSearch(array, target);

if(index >= 0){
    console.log(target, " is present at index: ", index ," in thr given array: ", array);
}
else{
    console.log(target, " not found as the index calculated is: ", index);
}