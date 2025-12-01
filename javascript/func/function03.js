
//함수 js
//js 함수도 전달 가능
// 매개변수로 함수, return 함수

function func01(a){
    console.log(a);
}
func01(123131);

function func02(f){
    console.log('func02()');
    f(); //매개변수 f는 함수 -> 함수호출 f();
}

const temp = ()=>{
    console.log('temp 실행');
}
const temp2 = ()=>{
    console.log('temp2 실행22');
}

func02(temp); //함수
func02(temp2); //함수


//콜백함수  callback   나중에/특정 상황에서 실행할 함수~
function reserve(name, callback){
    console.log('예약 종류 확인');
    console.log('예약 가능 여부 확인');

    console.log('예약 스케쥴 확인~!');
    //....
    //....
    console.log(name + " 님 예약 처리 가능해서 예약 완료입니다.");
    //....
    callback();
}

function sendMsg(){
    console.log("문자로 안내해주기");
}

reserve('가예약', sendMsg);
reserve('나예약', function(){
    console.log('전화로 예약 완료 알려주기');
})
//reserve('나예약', 함수 )
reserve('다예약', ()=>{
    console.log("카톡으로 안내해주기");
})