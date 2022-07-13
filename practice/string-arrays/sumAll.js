// implement a function that takes 2 integers and returns the sum of every number btwn (and including them)
//sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10

function sumAll(start,end){
    x = 0;
    for(let i= start; i<=end;i++){
        x+=i
    }

    console.log(x)
}

//sumAll(1,4) // returns 10
sumAll(1,10) // returns 55