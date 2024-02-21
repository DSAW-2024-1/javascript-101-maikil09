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
    let d=1;
    for(let i=n;i>0;i--){
      d*=i;
    }
    return d;
  }

}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.some(isNaN)) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  return Math.max(...arr);  
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== "string") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;

}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== "number") {
    console.log("Los datos de entrada no son adecuados");
    return;
  }

  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;

}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
