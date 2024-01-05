// https://school.programmers.co.kr/learn/courses/30/lessons/120822
// 코딩테스트 연습 > 코딩테스트 입문 > 문자열 뒤집기


function solution(my_string) {
    var answer = '';
    answer = my_string.split('').reverse().join('');
    return answer;
}