
//Java 배열
//new int[3]
//new int[5]
// --> ArrayList  .add .remove


//js 배열 처리 

/*
    shift       :앞 삭제
    unshift     :앞 추가 

    pop         :뒤 삭제
    push        :뒤 추가
*/

let arr = [1,2,3];

console.log(arr);
arr.unshift(10);
console.log(arr);
arr.push(30);
console.log(arr);
arr.shift()
arr.pop()
console.log(arr);

//concat 배열 연결

let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

console.log(arr1);
arr1 = arr1.concat(arr2);  //비파괴적함수로 원본을 바꾸고 싶으면~ "다시 저장!"
console.log(arr1);

// int n = 10;  
// print(n++);
// print(n+1);

//파괴적함수 : 함수 실행 후 원본에 영향 O
//비파괴적함수 : 함수 실행 후 원본에 영향 X


// ... 전개연산자

//let arr3 = arr2;
let arr3 = [...arr2];   // [  ...[4,5,6]   ]   [  4,5,6  ]  깊은복사
console.log(arr2);
console.log(arr3);
arr3[0] = 99;
console.log(arr2);
console.log(arr3);

//깊은복사(deep copy) : 값 자체를 통으로 새롭게 복사
//얕은복사(shallow copy) : 바라보는 주소만 복사

let x = [1,2,3];
let y = x;
let z = [...x];
console.log(x);
console.log(y);
console.log(z);

x[2] = 88;
console.log(x);
console.log(y);
console.log(z);

let q = [10, 20, ...x, 30, 40]; //[10, 20, 1, 2, 88, 30, 40]
console.log(q);


//   splice 함수
//   특정 위치에 추가, 삭제

// splice(인덱스, 삭제할갯수)
// splice(인덱스, 삭제할갯수, 추가할값)
console.log('--------------------');
let arr4 = [1,2,3,4,5];
console.log(arr4);
arr4.splice(1, 2);  //1인덱스 2개       파괴적함수
console.log(arr4);
arr4.push(6);
arr4.unshift(0);
console.log(arr4);
//arr4[2] = 50;
arr4.splice(2, 1, 50);
console.log(arr4);
arr4.splice(2, 0, 99);
console.log(arr4);
arr4.splice(4, 1);
console.log(arr4);

console.log('--------------------');
let obj = {
    name:"김밥천국",
    menu:"참치김밥"
};

console.log(obj);
obj.menu = "치즈김밥";  //값 수정 저장
console.log(obj);
obj.price = 6000;  //새로운 키값으로 추가
console.log(obj);
delete obj.price;  //기존 특정 키값 삭제
console.log(obj);
