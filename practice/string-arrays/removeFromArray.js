//implement a function that takes an array and some other arguments then removes the other arguments in array
// ex    removeFrom([1,2,3,4],3) // should remove 3 and return [1,2,4]

//splice() function -> removes or replace existing elements could also add...
/*
splice(start)
splice(index start, how many elements you want to delete)
splice(index, how many element, to what element )
*/

function removeFromArray(arr,target){
    for (let i=0; i<arr.length; i++){
        if(arr[i] == target){
            arr.splice(i,1) //at index i remove 1 element
        }
    }

    console.log(arr)
}

removeFromArray([1,2,3,4],3) // returns [1,2,4]