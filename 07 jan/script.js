// FizzBuzz! Print all numbers from 1 to 100. For all numbers divisible by 3 but not 5, 
// print Fizz. For all numbers divisible by 5 but not 3, print Buzz. For numbers 
// divisible by both 3 and 5, print FizzBuzz


let FizzBuzz = () => {
    for (let i=1; i <= 100; i++) {
        //Numbers divisible by 3 but not 5
        if (i % 3 == 0 && i % 5 != 0) {
            console.log("Fizz");
        }
        //Numbers divisible by 5, not 3
        else if (i % 5 == 0 && i % 3 != 0) {
            console.log("Buzz");
        }
        //Numbers divisible by both 3 and 5
        else if (i % 5 == 0 && i % 3 == 0) {
            console.log("FizzBuzz");
        }
        else {
            console.log(i);
        }
    }
}

FizzBuzz();