// https://school.programmers.co.kr/learn/courses/30/lessons/120831
// 코딩테스트 연습 > 코딩테스트 입문 > 짝수의 합

function solution(n) {
    var answer = 0;
    for(let x=2; x<=n; x+=2){
        answer += x;
    }
    return answer;
}