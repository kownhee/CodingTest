// https://school.programmers.co.kr/learn/courses/30/lessons/120583
// 코딩테스트 연습 > 코딩테스트 입문 > 중복된 숫자 개수

function solution(array, n) {
    var answer = 0;
    answer = array.filter(a => a===n ).length;
    return answer;
}