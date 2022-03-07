//Task 1:  Declare 2 variables a and b, such that a > b, and define values for them: sum, difference, product, quotient, remainder
let number1 = +prompt()
let number2 = +prompt()
let sum = number1 + number2;
let dif = number1 - number2;
let prod = number1 * number2;
let div = number1 / number2;
let rem = number1 % number2;
console.log(sum, dif, prod, div, rem)

//Task 2 Print name and age
let myName = prompt();
let myAge = prompt();
console.log(`My name is ${myName}, I am ${myAge}`)

//Task 3 Print yes if last digit is ‘odd’, otherwise print ‘no’.
let x = +prompt();
let lastDigit = x % 10;
if(lastDigit % 2 == 1) {
    console.log('yes')
} else {
    console.log('no')
}

//Task 4 Print 'yes', if number is negative, print 'no' otherwise
let number = +prompt();
console.log(number < 0 ? 'yes' : 'no')  

//Task 5 Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

let num1 = +prompt();
let num2 = +prompt();
if(num1 % num2 == 0 || num2 % num1 == 0) {
    console.log(1)
} else {
    console.log(0)
}



// Task 6 Print the name of the respective month.

let numberOfMonth = +prompt();
switch(numberOfMonth) {
    case 1: {
        console.log('January');
        break;
    }
    case 2: {
        console.log('February')
        break
    }
    case 3: {
        console.log('March')
        break
    }
    case 4: {
        console.log('April')
        break
    }
    case 5: {
        console.log('May')
        break
    }
    case 6: {
        console.log('June')
        break
    }
    case 7: {
        console.log('July')
        break
    }
    case 8: {
        console.log('August')
        break
    }
    case 9: {
        console.log('September')
        break
    }
    case 10: {
        console.log('October')
        break
    }
    case 11: {
        console.log('November')
        break
    }
    case 12: {
        console.log('December')
        break
    }
    default: {
        console.log('There is no month with this number')
    }
}

// Task 7 Given three numbers. Find the maximum

let a = +prompt();
let b = +prompt();
let c = +prompt();
if(a > b && a > c) {
    console.log(`${a} is maximum`)
} else if(b > c) {
    console.log(`${b} is maximum`)
} else {
    console.log(`${c} is maximum`)
}
