// Sum of Two Numbers
function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Los datos de entrada no son adecuados";
  } else {
    return a + b;
  }
}


// Factorial of a Number
function factorial(n) {
  let r = 1;
  if(n==0){
    return 1;
  }else if(n>0){
    for (let i = n; i > 0; i--) {
      r*=i; 
    }
    return n;
  }else{
    return "Los datos de entrada no son adecuados";
  }

}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
