//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.
function findOdd(A) {
    //happy coding!
     let arr = A.sort((a,b) => a - b);
    let counter = 1;
   
    if (arr.length === 1) return arr[0];
   
    for (let i = 0; i < arr.length - 1; i++) {
     
      if (arr[i] === arr[i + 1]) {
        counter++;
      }
      else if (arr[i] !== arr[i + 1]) {
       
        if (counter % 2 !== 0) {
          return arr[i];
        }
        // if it turns out to be last number in array with a count of 1 (since for loop doesnt get to it)
        else if (i + 1 === arr.length - 1) {
          return arr[i + 1];
        }
        counter = 1;
      }
    }
  }