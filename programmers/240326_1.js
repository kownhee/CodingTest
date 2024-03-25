// https://school.programmers.co.kr/learn/courses/30/lessons/120830
// 코딩테스트 연습 > 코딩테스트 입문 > 양꼬치

function solution(n, k) {
    var answer = 0;
    answer = n*12000 + k*2000 - Math.floor(n/10)*2000
    return answer;
}
