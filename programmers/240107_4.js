// https://school.programmers.co.kr/learn/courses/30/lessons/120839
// 코딩테스트 연습 > 코딩테스트 입문 > 가위 바위 보
function solution(rsp) {
    var answer = '';
    for(i=0; i<rsp.length; i++){
        switch(rsp[i]){
            case "2":
                answer=answer+"0";
                break;
            case "0" :
                answer=answer+"5";
                break;
            case "5" :
                 answer=answer+"2";
                break;
            default:
                break;
        }
            
    }
    return answer;
}

//
function solution(rsp)
{
    let arr = {2:0, 0:5, 5:2}
    var answer = [...rsp].map(v=>arr[v]).join("");
    return answer;
}
