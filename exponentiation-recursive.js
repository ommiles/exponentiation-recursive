// Write a function called power which accepts a base and exponent.
// The function should return the power of the base to the exponent.
// (not including negative bases and exponents)
// This function should mimic the functionality of the Math.pow().

const power = (base, exponent) => {
  if(exponent === 0) return 1;
  return base * power(base,exponent-1);
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
