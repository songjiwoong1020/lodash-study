import _ from 'lodash';

//참고라 적은 부분은 나중에 다시 봐야할것들임.


/* Array */

//_.chunk(array, [size=1])
//배열을 특정한 크기로 쪼개어 새로운 배열 반환. 반환은 2차원 배열이다.
const chunk = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const chunkVal = _.chunk(chunk, 3);
console.log('_.chunk');
console.log(chunkVal);

//_.compact(array)
//배열에서 falsey value를 제거하여 새로운 배열을 반환.
const compact = [0, 1, '', 'a', false, true, undefined, null, [], {}, [1, 2, 3], {a: 'a'}]

const compactVal = _.compact(compact);
console.log('_.compact');
console.log(compactVal);

//_.concat(array, [values])
//인자로 주어진 배열 혹은 값들을 합쳐 새로운 배열을 반환. 이때 1차원 배열의 값은 배열 안의 값을 사용한다.(배열통째로X)
const concat = [1, 2, 3];

const concatVal = _.concat(concat, [4], 5, [6, 7], {e: 8}, [[9]]);
console.log('_.concat');
console.log(concatVal);

//native와 비교. 큰 차이는 없어보인다.
const nativeConcatVal = Array.prototype.concat(concat, [4], 5, [6, 7], {e: 8}, [[9]]);
console.log('Array.prototype.concat');
console.log(nativeConcatVal);

//_.difference(array, [values])
//첫번째 인자로 주어진 배열에서 나머지 인자들로 들어온 배열에서 중복된는 값을 제거한 새로운 배열을 반환. 쉽게말해 첫번째 배열에 대한 나머지 배열들의 차집합이다.
const differenceVal = _.difference([2, 1], [2, 3]);
console.log('_.difference');
console.log(differenceVal);

//_.differenceBy(array, [values], [iteratee=_.identity])
//difference와 같은기능이지만 반복 대상 함수를 인자로 받는다.
//참고: https://velog.io/@nekonitrate/1%EC%9D%BC-3-Lodash-%EA%B3%B5%EB%B6%80%EB%B0%A9-difference-differenceBy-differenceWith
const differenceByVal = _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], item => item.x);
console.log('_.differenceByVal');
console.log(differenceByVal);

//_.differenceWith(array, [values], [comparator])
//마지막 인자로 비교 함수를 받으며, 이 함수는 각 요소들을 비교할때 "동일한지 여부"를 판단하는 함수로 활용된다.
//참고: https://velog.io/@nekonitrate/1%EC%9D%BC-3-Lodash-%EA%B3%B5%EB%B6%80%EB%B0%A9-difference-differenceBy-differenceWith
const differenceWith = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

const differenceWithVal = _.differenceWith(differenceWith, [{ 'x': 1, 'y': 2 }], _.isEqual);
console.log('_.differenceWith');
console.log(differenceWithVal);

//_.drop(array, [n=1])
//인자로 전달한 값을 기준으로 앞부터 자른 배열을 반환.
const drop = [1, 2, 3, 4, 5];

const dropVal = _.drop(drop, 2);
console.log('_.drop');
console.log(dropVal);

//_.dropRight(array, [n=1])
//인자로 전달한 값을 기준으로 뒤부터 자른 배열을 반환.
const dropRight = [1, 2, 3, 4, 5];

const dropRightVal = _.dropRight(dropRight, 2);
console.log('_.dropRight');
console.log(dropRightVal);

//_.dropRightWhile(array, [predicate=_.identity])
//drop에서 인자로 전달할 길이 대신 판정 함수를 받는다. 뒤부터 시작해서 false를 만나는 순간 멈추고 반환.
const dropRightWhile = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'jiwoong', 'active': true },
  { 'user': 'pebbles', 'active': false },
];

const dropRightWhileVal = _.dropRightWhile(dropRightWhile, o => !o.active);
console.log('_.dropRightWhile');
console.log(dropRightWhileVal);

//_.dropWhile(array, [predicate=_.identity])
//drop에서 인자로 전달할 길이 대신 판정 함수를 받는다. 앞부터 시작해서 false를 만나는 순간 멈추고 반환.
const dropWhile = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'jiwoong', 'active': true },
  { 'user': 'pebbles', 'active': false },
];

const dropWhileVal = _.dropWhile(dropWhile, o => o.active);
console.log('_.dropWhile');
console.log(dropWhileVal);