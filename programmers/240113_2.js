// https://school.programmers.co.kr/learn/courses/30/lessons/120891
// 코딩테스트 연습 > 코딩테스트 입문 > 369게임

function solution(order) {
    var answer = 0;
    var num = order.toString();
    for(let i=0; i<num.length; i++)
    {
        if(num[i] === '3' || num[i] === '6' || num[i] === '9'){
            answer++;
        }
    }
    return answer;
}

// 다른 방법
function solution(order){
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}

function solution(order){
    return order.toString().split("")
    .filter((v)=> v==="3" || v==="6" || v==="9").length;
}