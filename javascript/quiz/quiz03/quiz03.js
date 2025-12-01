let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

/* {코딩부분} */

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));

function changeLink(url){
    //console.log(url.includes('://'));   //false 
    //console.log(url.indexOf('://'));    //-1    
    
    /* if(url.includes('://')){ //주소확인

    } else {  //주소 잘못됨

    } */

    if(url.includes('://') == false){ //주소확인
        return "경로가 잘못되었습니다.";
    }

    //정상
    //작업시작

    
    //console.log(url.indexOf("://"));
    //console.log(url.substring(url.indexOf("://")+3));
    let splitStr = url.split('://');
    //console.log(splitStr);

    if( splitStr[0] == 'https'){
        //return splitStr[0] + "://secure." + splitStr[1];
        return "https://secure." + splitStr[1];
    } else {
        //return splitStr[0] + "s://oepn." + splitStr[1];
        return "https://open." + splitStr[1];
    }
}

/*
출력결과가 알맞게 나오도록 코드를 추가하세요.

조건1. :// 형식이 없으면 경로가 잘못되었습니다.
조건2. https로 접속시 secure가 추가됨
조건3. http 로 접속시 open이 추가됨
조건4. http 접속, https 접속 모두 https 경로로 변경되어 출력됨
*/