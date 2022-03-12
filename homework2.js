// Task 1 For a given number calculate the sum of its digits.

let number = +prompt();
let result = 0;
while(number !== 0) {
    let lastDigit = number % 10;
    result += lastDigit;
    number = (number - lastDigit) / 10;
}
console.log(result)

// Task 2   Given three sides of a triangle. Check whether the triangle is valid or not. Print 'yes' if it is valid and 'no' otherwise.

let a = +prompt();
let b = +prompt();
let c = +prompt();
if((a > b && a > c && a < b + c) || (b > c && b > a && b < a + c) || (c > a && c > b && c < a + b)) {
    console.log('yes')
} else {
    console.log('no')
}

// Task 3 Count numbers of digit 9 in a number.

let number = +prompt();
let count = 0;
while(number !== 0) {
    let lastDigit = number % 10;
    if(lastDigit === 9) {
        count++
    }
    number = (number - lastDigit) / 10;
}
console.log(count)

// Task 4 Given a positive number. Print it in reverse order.

let number = +prompt();
let count = 0;
let reverseNumber = 0;
let a = number;
console.log(number);
while(number !== 0) {
    number = (number - number % 10) / 10;
    count++;
}

for(let i = count - 1; i >= 0; i--) {
    let lastDigit = a % 10;
    reverseNumber += lastDigit * Math.pow(10, i);
    a = (a - lastDigit % 10) / 10;
}
console.log(reverseNumber)


// Task 5 Given a number as input, check, is it power of 2.

let number = +prompt()
let isEven = true;
while(number !== 1) {
    if(number % 2 === 1) {
        isEven = false
        break
    }
    number /= 2;
}
console.log(isEven)
