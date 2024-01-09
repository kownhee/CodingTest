// https://school.programmers.co.kr/learn/courses/30/lessons/120909
// 코딩테스트 연습 > 코딩테스트 입문 > 제곱수 판별하기

function solution(n) {
    var answer = 0;
    return Math.sqrt(n)%1 === 0 ? 1:2;
}

// Math.sqrt : 루트를 씌워 숫자의 제곱근을 반환한다.