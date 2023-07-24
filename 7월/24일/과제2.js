/**
 *
 * 이 코드는 null과 undefined의 차이점을 살펴보기 위한 것입니다.
 *  비교 연산자(==)를 사용하면 null과 undefined는 동일하게 취급됩니다.
 *  그러나, 일치 연산자(===)를 사용하면 null과 undefined는 서로 다르게 취급됩니다.
 * 다른 언어와 달리 JavaScript는 변수가 초기화되지 않으면 기본적으로 undefined로 설정되며,
 * 명시적으로 null을 할당해야 null이 됩니다. 또한 객체의 존재하지 않는 속성을 참조하면
 * undefined가 반환되며, 배열에서 인덱스를 벗어난 요소를 참조하려고 하면 undefined가 반환됩니다.
 */

let uninitialized;
let explicitNull = null;

console.log(`uninitialized is ${uninitialized}`); // undefined
console.log(`explicitNull is ${explicitNull}`); // null

let obj = { prop: null };
console.log(`property that does not exist is ${obj.noProp}`); // undefined
console.log(`property explicitly set to null is ${obj.prop}`); // null

function func(arg = null) {
  console.log(`unprovided argument is ${arg}`); // null
}

func(); // Call with no argument

let arr = [null];
console.log(`unindexed array item is ${arr[1]}`); // undefined
console.log(`indexed array item set to null is ${arr[0]}`); // null

// In all cases, we use the == operator (equality) to compare with null and undefined, both return true
console.log(`uninitialized is null or undefined: ${uninitialized == null}`); // true
console.log(`explicitNull is null or undefined: ${explicitNull == null}`); // true
console.log(
  `property that does not exist is null or undefined: ${obj.noProp == null}`
); // true
console.log(
  `property explicitly set to null is null or undefined: ${obj.prop == null}`
); // true
console.log(`unindexed array item is null or undefined: ${arr[1] == null}`); // true
console.log(
  `indexed array item set to null is null or undefined: ${arr[0] == null}`
); // true
