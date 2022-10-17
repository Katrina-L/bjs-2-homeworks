// Задание 1
function getArrayParams(arr) {
  let min = 100;  //  Infinity
  let max = -100; //  -Infinity
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
    avg = +(sum / (i + 1)).toFixed(2);
  }

  return { min: min, max: max, avg: avg };
}

// Задание 2                arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]]
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    if ( max < func(arrOfArr[i]) ) {
      max = func(arrOfArr[i]);
    } 
  }
  
  return max;
}

// Задние 2: работает, но не проходит тест ---------------------------------------
// function worker(arr) {
//   let sum = [];

//   for (let i = 0; i < arr.length; i++) {
//     let sumIndex = 0;
    
//     for (let j = 0; j < arr[i].length; j++) {
//       sumIndex += arr[i][j];
//     }

//     sum.push(sumIndex);
//   }
  
//   return sum;
// }

// function makeWork(arrOfArr, func) {
//   let max;
//   func;
//   for (let i = 0; i < func.length - 1; i++) {
//     (func[i] > func[i + 1]) ? max = func[i] : max = func[i + 1];
//   }
  
//   return max;
// }
// ---------------------------------------------------------------------

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = +Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
     if (max < arr[i]) {
      max = arr[i];
    } 
  }
  
  return Math.abs(max - min);
}
