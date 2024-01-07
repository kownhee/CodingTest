// https://school.programmers.co.kr/learn/courses/30/lessons/120910
// 코딩테스트 연습 > 코딩테스트 입문 > 세균 증식

function solution(n, t) {
    var answer = n;
    for(let i=1; i<=t; i++){
        answer=answer*2;
    }
    return answer;
}
// Math.pow
// 거듭제곱 
function solution(n, t) {
    return n*Math.pow(2,t);
}