/*
 * Sum of a range!!!
 * 
 * Part 1: Write a function that takes two parameters, start and end, and returns an array that contains every number
 * between and including the start and end parameters. 
 * 
 * Part 2: Write a function that takes an array of numbers and returns their sum
 * 
 * Part 3: (Bonus) Modify the range function to take an optional third parameter (step) which defines how the
 * values in the array are incremented.
 * 
 */

 //Part 1: The Range Function
 function range(start, end) {
    let range = [] 
    for (let i = start; i <= end; i++) {
        
        range.push(i);
        
        //console.log(i);
     }

    return range;
 }

 //Part 2: The Sum Function
 function sum(nums) {
    let sum = 0;
    nums.forEach(element => {
        sum += element;
    });

    return sum;
}

//Part 3: The Stepped Range Function
const stepRange = (start, end, step = 1) => {
    let range = [];

    for (let i = start; i <= end; i+= step) {
        range.push(i);
    }

    return range;
}