console.log('Hi Hello');

console.log(global);

// console.log('Argument Passed', process.argv.slice(2));


// inputs from Cmd line arguements
// write a function which take input from cmd line args 
// and check whether it is palindrome
// const [inpStr] = process.argv.slice(2);


const checkPalindrome = (testStr) => {
  // return true if palindrome
  // return false if not palindrome
  let i = 0;
  let j = testStr.length - 1;
  while (i < j) {
    if (testStr[i] !== testStr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

for (var inpStr of process.argv.slice(2)) {
  if (checkPalindrome(inpStr)) {
    console.log(`${inpStr} is a palindrome`);
  } else {
    console.log(`${inpStr} is not a palindrome`);
  }
}