// Task 1 Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements starting from a to b spaced by step.

function arithProgres(a, b, step) {
    let result = []
    for(let i = a; i <= b; i += step) {
        result.push(i)
    }
    return result
}



// Task 2 Given a string and a symbol. Find the number of occurrences of the symbol in the string.

function findNumberOfSymbol(str, symb) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == symb) {
            count++
        }
    }
    return count
}

findNumberOfSymbol('Some text here', 't')



// Task 3 Given a string. Check whether the string is palindrome or not.

function isPalindrome(str) {
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - 1 - i]) {
            return 'no'
        }
    }
    return 'yes'
}

isPalindrome('racecar')
isPalindrome('neveroddoreven')



//Task 4 Given an array of numbers. Find the maximum element in array.

function findMaxInArray(arr) {
    let max = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}



// Task 5 Given an array. Create the array which elements are products between two neighbours.

function productTwoNeighbours(arr) {
    let newArr = []
    for(let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i - 1])
    }
    return newArr
}



// Task 6 Given a string and symbols. Change first symbol by the second one in the string.

function changeFirstSymbolBySecondInString(string, fisrtSym,secondSymb) {
    for(let i = 0; i < string.length; i++) {
        if(string[i] == fisrtSym) {
            string = string.replace(fisrtSym, secondSymb)
        }
    }
    return string
}

changeFirstSymbolBySecondInString('The results are not recorded yet', 't', 'w')


function changeFirstSymbolBySecondInString(string, fisrtSym,secondSymb) {
    return string.replaceAll(fisrtSym, secondSymb)
}

changeFirstSymbolBySecondInString('The results are not recorded yet', 't', 'w')



// Task 7 Print the following number pattern

function numberPattern(n) {
    let result = '';
    for(let i = 1; i <= n; i++) {
        result += drawRow(i)  + '\n';
    }
    
    for(let i = n - 1; i >= 1; i--) {
        result += drawRow(i) + '\n';
    }
    return result;
}

function drawRow(count) {
    let row = '';
    for(let i = 1; i <= count; i++) {
        row += i;
    }
    return row;
}