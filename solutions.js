// Sum of Two Numbers
function sum(a, b) {
  if(typeof a !=="number" || typeof b !=="number"){
    console.log("Los datos de entrada no son adecuados");
  }else{
    return a+b;
  }
}


// Factorial of a Number
function factorial(n) {
  if(n==0 || n==1){
    return 1;
  }else if(typeof n!=="number"){
    console.log("Los datos de entrada no son adecuados");
  }else{
    let d=0;
    for(let i=n;i>0;i--){
      d*=i;
      return i;
    }
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
