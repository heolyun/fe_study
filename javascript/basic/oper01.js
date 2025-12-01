//operator 연산자

let x = 10;
let y = 10;
let z = '10';

console.log(x+y);
console.log(x-y);

console.log( 2 ** 4);  //2*2*2*2

// ==   ===
console.log( x == y); //값 같은가
console.log( x == z);

//값 + 타입(자료형) 같은가?
console.log( x === y);
console.log( x === z);

console.log( x > 5 && y > 0);
console.log( x == 1 || y === '0');

let q = 10;
let w = '20';
let e = 30;

console.log(q+e);
console.log(q+w+e);

//형변환
//String()
//Number()

console.log(q + String(e));
console.log(q + Number(w) + e);

console.log(Number('123.442'));
console.log(Number('12223'));

//q = 10

if( q == 10) {
    console.log('10확인 출력');  //q가 10이면 이거 출력
}

q == 11 && console.log('&& 11확인 출력');
q == 10 && console.log('&& 10확인 출력');


// true && true
// false || true

console.log(10 == 10.0)
console.log(10 === 10.0)
console.log(Number('10') === Number('10.0'))
