// function isTriangle( a, b, c ) {
//   if (a<=0 || b<=0 || c<=0) {
//     return false;
//   }
//   if (a + b >= c && a + c >= b && c + b >= a ){
//     return true;
//   }
// }
// console.log(isTriangle(4, 9, 6))

function getIntervalString(a, b, isStartIncluded, isEndIncluded)  {
  
  if (isStartIncluded === true){
    return '[', a, b
  }
  if (isStartIncluded === false) {
    return '(', a, b
  }
  
  if (isEndIncluded === true){
    return ')'
  }
  if (isEndIncluded === false){
    return  ')'
  }
}
console.log(getIntervalString(3, 4, true, false))