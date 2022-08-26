// 1. Write a JavaScript function that reverse a number. 

function reverseNum(num) {
    let finalNum = 0;
    let lastDig;
    let startNum = num;
    
    while(startNum != 0){
        lastDig = startNum % 10;
        finalNum = finalNum * 10 + lastDig;
        startNum = Math.floor(startNum/10);
    }
    console.log(finalNum);
}

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?

function isPalindrome(string) {
    
    let checkString = string.split(" ").join("");
    
    let reverseString = checkString.split("").reverse().join("");

    if (checkString == reverseString){
        console.log(`The string "${string}" is a palindrome`);
    }
    else {
        console.log(`The string "${string}" is not a palindrome`);
    }

}

// 3. Write a JavaScript function that generates all combinations of a string.

function stringCombo (string) {
    let resultArray = [];
    for (let i = 0; i < string.length; i++){
        for (let j = i + 1; j < string.length + 1; j++){
            resultArray.push(string.slice(i, j));
        }
    }
    console.log(resultArray);
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 

function alphabecticSort(string) {
    let sortedString = string.split('').sort().join('');
    console.log(sortedString);
}

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function capitilizeWords(string) {
    let splitString = string.split(" ");
    for (let i = 0; i < splitString.length; i++){
        splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1);
    }
    let joinedString = splitString.join(" ");
    console.log(joinedString);
}

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longestWord(string) {
    let splitString = string.split(" ");
    let longWord = "";
    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i].length > longWord.length){
            longWord = splitString[i];
        }
    }
    console.log(longWord);
}

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function vowelCount(string) {
    let vowelNum = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < string.length; i++){
        if (vowels.includes(string[i].toLowerCase())){
            vowelNum++;
        }
    }
    console.log(vowelNum);
}

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function isPrime(num) {
    if (num === 1) {
        return false;
    }
    for (let i = 2; i < num; i++){
        if (num % i == 0){
            return false;
        }
    }
    return true;

}

// 9. Write a JavaScript function which accepts an argument and returns the type.

function typeOfArg(variable) {
    return typeof variable;
}

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function identityMatrix(num) {
    for (let i = 0; i < num; i++){
        for (let j = 0; j < num; j++){
            if (i === j) {
                console.log('1');
            }
            else {
                console.log('0');
            }
        }   
    console.log('----------');
    }
}

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

function secondGreatestLowestNum(arrNum){
    let sortedArray = arrNum.sort((a, b) => { return a-b });
    console.log(sortedArray[1] + ',' + sortedArray[sortedArray.length - 2]);
}

// 12. Write a JavaScript function which says whether a number is perfect.

function isPerfectNum(num){
    let counter = 0;
    for(let i = 1; i <= num / 2; i++){
        if(num % i === 0){
            counter = counter + i;
        }
    }
    
    if((counter === num) && (counter !== 0)){
    console.log("This is a perfect number!");
    } 
    else {
    console.log("This is not a perfect number.");
    }   
 } 

 // 13. Write a JavaScript function to compute the factors of a positive integer.



function factorsOfInt(num){
    let factorsArr = [];

    for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            factorsArr.push(i);
        }
    }

    console.log("Here are the factors for the number: " + num + " ----> "+ factorsArr);
}

// 14. Write a JavaScript function to convert an amount to coins. 

function amountToCoins(num) {
    let remainingNum = num;
    let coins=[25, 10, 5, 2, 1];
    let outputArr = [];
    
    for (let i=0; i < coins.length; i++) {
      if (remainingNum >= coins[i]) {
        remainingNum -= coins[i];
        outputArr.push(coins[i]);
        i--;
      }
    }
    
    console.log("Your number was: " + num + " -----> Output: " + outputArr);
}
  
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases

function exponent(b,n){
    let result = 1;
    for (let i = 1; i <= n; i++){
        result = b * result;        
    }
    console.log(result);
}

// 16. Write a JavaScript function to extract unique characters from a string. 

function uniqueChar(string){
    let output = "";
     
    for(let i = 0; i < string.length; i++){
      if(output.includes(string[i]) === false){
        output = output + string[i]
      }
    }
    console.log(output);
}

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

function countOccurences(string) {
    let splitString = string.split("").sort().join("");
    let count = 1;
    for (let i = 0; i < string.length; i++) {
      if (splitString[i] == splitString[i + 1]) {
        count++;
      } else {
        console.log("Character: " + splitString[i] + " -----> Num of Occurences: " + count);
        count = 1;
      }
    }
  }

// 18. Write a function for searching JavaScript arrays with a binary search.

function binarySearch(arr, key){
    let start = 0;
    let end = arr.length - 1;
    let isFound = false;

    while (start <= end) {
        let midIndex = Math.floor((start + end) / 2);

        if (arr[midIndex] === key) {
            console.log("Desired value is at Index: " + midIndex);
            isFound = true;
            break;
        } else if (arr[midIndex] < key) {
            start = midIndex + 1;
        } else {
            end = midIndex - 1;
        }
    }
    if(!isFound){
        console.log("Desired value not found.");
    }
}

// 19. Write a JavaScript function that returns array elements larger than a number.


function logLarger(arr, num){
    console.log(arr.map(value => value > num ? value : "").filter(ele => ele));
}


// 20.  Write a JavaScript function that generates a string id (specified length) of random characters.

function stringId(length){
    let string = "";
    let sampleList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < length; i++ ){  
        string += sampleList.charAt(Math.floor(Math.random() * sampleList.length));
    }
    console.log(string);
}

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.

function subsetCombos(array, size){
    let resultArray = [], result;
    
   
    for(let x = 0; x < Math.pow(2, array.length); x++){
        result = [];
        i = array.length - 1; 
        while (i--){
            if( (x & (1 << i)) !== 0){
                result.push(array[i]);
            }
        }

    if( result.length >= size)
       {
          resultArray.push(result);
        }
    }

    console.log(resultArray); 
}

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 

function charCount(string, ltr){
    let ltrCount = 0;
    for (let i = 0; i < string.length; i++){
        if (string.charAt(i) == ltr){
            ltrCount += 1;
        }
  }
  console.log(ltrCount);
}

// 23. 

function firstNonRepeatedCharacter(string) {
    let isFound = false;
    for (let i = 0; i < string.length; i++) {
      let char = string.charAt(i);
      if (string.indexOf(char) == i && string.indexOf(char, i + 1) == -1) {
        console.log(char);
        isFound = true;
      }
    }
    if (!isFound){
        console.log("All chars repeated!");    
    }
  }

// 24. Write a JavaScript function to apply Bubble Sort algorithm.

function bubbleSrt(arr){
    for(let i = 0; i < arr.length; i++){       
      for(let j = 0; j < (arr.length - i -1); j++){
            if(arr[j] > arr[j + 1]){           
            let tmp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = tmp
        }
      }
    }
    console.log(arr);
}

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.

function longCountry(countryName){
    return countryName.reduce(
        function(name, country) {
            return name.length > country.length ? name : country;
        }, "");
}

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

function longestUniqueSubsttr(string)
{
    let length = string.length;
    let result = 0;
     
    for(let i = 0; i < length; i++){
        let visited = new Array(256);         
        for(let j = i; j < length; j++){
            if (visited[string.charCodeAt(j)] == true){
                break;
            } else {
                result = Math.max(res, j - i + 1);
                visited[string.charCodeAt(j)] = true;
            }
        }
    }
    console.log(result);
}

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

function helloWorld() {
    return 'Hello World!';
}
function name(userName, funct){
    const msg = func();
    console.log(`${msg} ------> ${userName}`);
}

// 29. Write a JavaScript function to get the function name.

function printFunctName() {
    console.log(arguments.callee.name);
}