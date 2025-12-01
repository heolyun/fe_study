
//내장객체

let str = "hellohi@gmail.com";

console.log(str.length); //문자 길이
console.log(str.includes("@")); //문자열에 특정 문자가 포함되어있는가?
console.log(str.indexOf("@")); //해당문자가 있는 인덱스 찾기

console.log(str.includes("!"));  //없으면 false
console.log(str.indexOf("!"));  // 없으면 -1

// if(str.indexOf("!") == -1) 

console.log(str.substring(0, 4)); //특정 위치 문자 잘라내기
                    //   0<=  i < 4
console.log(str.substring(5, 10)); //특정 위치 문자 잘라내기
                    //   5<=  i < 10
console.log(str);

// 이메일아이디 : 처음 ~ @
// 도메인주소 : @다음~끝
console.log(str.indexOf("@"));
console.log(str.substring(0, str.indexOf("@")));
console.log(str.substring(str.indexOf("@")+1));
console.log( str.substring( str.indexOf("@")+1, str.length ));


//문자에 앞뒤 공백 제거   trim()
// "abc" 가입  " abc" 

let test = " abc ";
console.log("|" + test + "|");
console.log("|" + test.trim() + "|");
test = test.trim();
console.log("|" + test + "|");


//문자 분리 split
let phone = '010-1234-5678';
let spt = phone.split("-");
console.log(spt);
console.log(spt[1]);
console.log(spt[2]);


console.log('------------------');
//Date
let today = new Date();

console.log(today);
console.log(today.getFullYear()); //년
console.log(today.getMonth()); //월  0~11   (1월~12월)  10 + 1  -> 11월
console.log(today.getMonth() + 1);
console.log(today.getDate()); //일
console.log(today.getHours()); //시
console.log(today.getMinutes()); //분
console.log(today.getSeconds()); //초

console.log(today.getDay()); //요일 0~6 (일 월 화 수 목 금 토 )

console.log(Math.abs(-10));  //절대값
console.log(Math.round(123.56)); //반올림