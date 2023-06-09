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

//_.fill(array, value, [start=0], [end=array.length])
//첫번째 인자의 배열을 두번째 인자의 값으로 채운뒤 반환. 원본 배열에 영향을 준다. 특이사항으로는 시작인덱스와 종료인덱스 지정이 가능하다는점이다.
//참고: Array.prototype.fill 함수와 비교하기
const fill = [1, 2, 3];

const fillVal = _.fill(fill, 'a');
console.log('_.fill');
console.log(fill);
//시작은 인덱스(0부터)지만 끝부분은 length개념으로 받는다.(왜?)
console.log(_.fill([1, 2, 3, 4, 5, 6], '*', 2, 5));

//_.findIndex(array, [predicate=_.identity], [fromIndex=0])
//배열에서 찾고자 하는 특정한 값의 인덱스를 반환한다. 찾고자 하는값이 없다면 -1을 반환한다.
const findIndex = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];;

const findIndexVal = _.findIndex(findIndex, o => o.user === 'barney');
console.log('_.findIndex');
console.log(findIndexVal);

//native와 비교.
const nativeFindIndexVal = findIndex.findIndex(o => o.user === 'barney');
console.log('Array.prototype.findIndex');
console.log(nativeFindIndexVal);

//기본적인 동작은 같은거 같으나 조금 더 편리성이 부여된다. 아래와 같이 lodash에선 함수말고도 다양한 방식으로 가능하다.
_.findIndex(function(o) { return o.user == 'barney'; });
// => 0
 
// The `_.matches` iteratee shorthand.
_.findIndex({ 'user': 'fred', 'active': false });
// => 1
 
// The `_.matchesProperty` iteratee shorthand.
_.findIndex(['active', false]);
// => 0
 
// The `_.property` iteratee shorthand.
_.findIndex('active');
// => 2

//_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])
//배열에서 찾고자 하는 특정한 값의 인덱스를 반환한다. 찾고자 하는값이 없다면 -1을 반환한다.
//findIndex와 다른점은 역순으로 순회를 한다는점인데, 일치하는값이 두가지 이상일경우 findIndex와 findLastIndex의 값은 달라질수있다.
const findLastIndex = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];;

const findLastIndexVal = _.findLastIndex(findLastIndex, o => o.user === 'barney');
console.log('_.findLastIndex');
console.log(findLastIndexVal);

console.log('findIndex와 findLastIndex비교');
console.log(_.findIndex([1, 1], v => v === 1));
console.log(_.findLastIndex([1, 1], v => v === 1));

//_.head(array)
//배열이 가진 첫번째 요소를 반환.
const headVal = _.head([1, 2, 3]);

console.log('_.head');
console.log(headVal);