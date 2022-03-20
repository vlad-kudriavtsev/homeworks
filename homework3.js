// Task 1 Given an array․ Compute the length of the array

function lengthOfArray(arr) {
    let length = arr.push(0) - 1;
    arr.pop()
    return length
}



// Task 2 Given an array of numbers. Print the sum of the elements in array.

function sumOfArrayElements(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}


// Task 3 Given two numbers. Print powers of 3 between that numbers.

function printPow3BetweenRange(a, b) {
    for(let i = a; i <= b; i++) {
        if(isPow3(i)){
            console.log(i)
        }
    }
}

function isPow3(number) {
    let isPow3 = true;
    while(number !== 1) {
        if(number % 3 == 1 || number % 3 == 2 || number === 0) {
            isPow3 = false;
            break
        }
        number /= 3
    }
    return isPow3
}


// Task 4 Given a number as input, insert dashes (-) between each two even numbers.

function insertDashesBetTwoEvenDigits(number){
    let stringNumberWithDashes = ''
    let stringNumber = String(number)
    for(let i = 0; i < stringNumber.length; i++) {
        if(stringNumber[i] % 2 == 0 && stringNumber[i + 1] % 2 == 0) {
            stringNumberWithDashes += stringNumber[i] + '-'
        } else {
            stringNumberWithDashes += stringNumber[i]
        }
    }
    return stringNumberWithDashes
}


// Task 5.Insert a n positive number. Print the n-st prime number.

function printNstPrimeNumber(n) {
    let i = 0;
    let number = 2
    while(i < n) {
        if(isPrime(number)) {
            ++i;
            if(i == n) {
                return number
            }
        }
        number++
    }
}

function isPrime(number) {
    let isPrime = true
    for(let i = 2; i < number; i++) {
        if(number % i == 0) {
            isPrime = false
            break
        }
    }
    return isPrime
}