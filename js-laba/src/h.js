// function isTriangle( a, b, c ) {
//   if (a<=0 || b<=0 || c<=0) {
//     return false;
//   }
//   if (a + b >= c && a + c >= b && c + b >= a ){
//     return true;
//   }
// }
// console.log(isTriangle(4, 9, 6))

function reverseInteger( num ) {
  return num.toString().split('').reverse().join('');
}
console.log(reverseInteger(12345))