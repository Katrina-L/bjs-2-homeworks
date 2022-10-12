"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  
  if ( d < 0 ) {
    arr = [];
  } else if ( d === 0 ) {
    arr.push( (-b/(2*a)) );
  } else if ( d > 0 ) {
    arr.push( (-b + Math.sqrt(d) )/(2*a) );
    arr.push( (-b - Math.sqrt(d) )/(2*a) );
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  let paramType;
  function checkParams(paramName, param) {
    let paramNum = +param;

    if ( Number.isNaN(paramNum) ) {
      return paramType = `Параметр "${paramName}" содержит неправильное значение "${param}"`
    }
    return (+param);
  }

  let totalAmount;    
  
  switch ("string") {
    case (typeof checkParams("Процентная ставка", percent)):
    case (typeof checkParams("Начальный взнос", contribution)):
    case (typeof checkParams("Общая стоимость", amount)):
      return totalAmount = paramType;
      break;
  }

  // switch ("string") {
  //   case (typeof checkParams("Процентная ставка", percent)):
  //     return totalAmount = paramType;
  //     break;
  //   case (typeof checkParams("Начальный взнос", contribution)):
  //     return totalAmount = paramType;
  //     break;
  //   case (typeof checkParams("Общая стоимость", amount)):
  //     return totalAmount = paramType;
  //     break;
  // }

  let creditBody = amount - contribution;
  let now = new Date();
  let period = +((date - now)/1000/60/60/24/365*12).toFixed(0);  
  let percentMonth = percent/100/12;
  let payMonth = creditBody * (percentMonth + (percentMonth / (((1 + percentMonth)**period) - 1)));
  totalAmount = +(payMonth * period).toFixed(2);
  return totalAmount;
}

/*
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  let percentNum = +percent;
  if ( Number.isNaN(percentNum) ) {
    return totalAmount = `Параметр <Процентная ставка> содержит неправильное значение "${percent}"`;
  }

  let contributionNum = +contribution;
  if ( Number.isNaN(contributionNum) ) {
    return totalAmount = `Параметр <Начальный взнос> содержит неправильное значение "${contribution}"`;
  }

  let amountNum = +amount;
  if ( Number.isNaN(amountNum) ) {
    return totalAmount = `Параметр <Общая стоимость> содержит неправильное значение "${amount}"`;
  }

  let creditBody = amountNum - contributionNum;
  let now = new Date();
  let period = +((date - now)/1000/60/60/24/365*12).toFixed(0);  
  let percentMonth = percentNum/100/12;
  let payMonth = creditBody * (percentMonth + (percentMonth / (((1 + percentMonth)**period) - 1)));

  totalAmount = +(payMonth * period).toFixed(2);

  return totalAmount;
}
*/