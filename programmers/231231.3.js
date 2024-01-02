// https://school.programmers.co.kr/learn/courses/30/lessons/181939
// 코딩테스트 연습 > 코딩 기초 트레이닝 > 더 크게 합치기

function solution(a, b) {
    var answer = 0;
    var x = Number((a.toString())+(b.toString()));
    var y = Number((b.toString())+(a.toString()));
    if(x>y) answer=x;
    else answer=y;
    
    return answer;
}

function solution(a,b){
    return Math.max(Number(`${a}${b}`) , Number(`${b}${a}`));
}