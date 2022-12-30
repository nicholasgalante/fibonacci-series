function fibonacci(num) {
  const fibArr = [0,1];
  for (let i = 2; i < 30; i++) {
    fibArr.push(fibArr[i-1] + fibArr[i-2])
  }
  return fib[num];
}


if (require.main === module) {

  console.log("TEST 1 - Expecting: 0");
  console.log("Result:", fibonacci(0));

  console.log("TEST 2 - Expecting: 1");
  console.log("Result:", fibonacci(2));

  console.log("TEST 3 - Expecting: 55");
  console.log("Result:", fibonacci(10));
}

module.exports = fibonacci;

/*  Pseudocode:
create fibonacci array, starting with 0 and 1 as first two indexes
  create empty array 
  for loop, 30 iterations
  for each index, push (index - 1) and (index - 2)
return fibonacci array(num)
*/


// And a written explanation of your solution



