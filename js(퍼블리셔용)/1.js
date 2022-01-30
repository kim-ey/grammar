console.log('hello js!')

// 변수 : 변하는 수
// 변수 선언 종류 : var 옛날 방식으로 지금은 사용안함. let 변경가능 변수, const 상수 변수.
let l = '렛으로 선언한 변수입니다.'
l = '렛'
console.log(l)
const ll = 'const로 선언한 변수입니다.'
console.log(ll)

// 숫자 변수
let a = 1
let b = 2
console.log(a)
console.log(b)
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)

// 문자열 변수 
a = '안녕하세요'
b = 'JS!'
console.log(a, b)

// 불린 변수 (true, false)
a = 10
b = 9
let c = (a > b)
console.log(c)

// 조건문
if (a < b) {
    console.log('a가 더 작습니다.')
} else if (a === b) {
    console.log('a와 b가 같습니다.')
} else {
    console.log('b가 더 작습니다.')
}

// 배열 (=array) : 하나의 변수에 여러개의 값을 순서대로 넣은 것
let array = [3, 6, 9, 1000]
console.log('array:', array)
console.log('array[0]:', array[0]);
console.log('array[1]:', array[1]);
console.log('array[2]:', array[2]);
console.log('array[3]:', array[3]);
console.log('array[4]:', array[4]);
console.log('array.length:', array.length);
// 배열의 마지막 꺼내기
console.log('array[array.length - 1]:', array[array.length - 1]);

// 반복문 (시작지점; 종료지점; 추가값)
for (let i = 0; i < array.length; i = i + 1) {
    console.log('i번째의 배열의 값:', array[i])
}

// 객체 해야함.