// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    //code here
    // base case,condition where we return recursion stops

    if (number===2){
      return 2
    }

    return number*findFactorialIterative(number-1);
  }
  
  function findFactorialIterative(number) {
    //code here
    let answer = 1;
    if (number === 2){

        answer = 2;
    }
    for(let i=2; i<= number;i++){

      answer = answer*i;

    }
    return answer;
  }


  //console.log(findFactorialIterative(5));
  console.log(findFactorialRecursive(5));