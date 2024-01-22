// https://school.programmers.co.kr/learn/courses/30/lessons/120886
// 코딩테스트 연습 > 코딩테스트 입문 > A로 B 만들기

function solution(before, after) {
    return after.split('').sort().join('') === before.split('').sort().join('') ? 1:0;
}
