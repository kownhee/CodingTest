// https://school.programmers.co.kr/learn/courses/30/lessons/181910
// 코딩테스트 연습 > 코딩 기초 트레이닝 > 문자열의 뒤의 n글자

function solution(my_string, n) {
    var answer = '';
    answer = my_string.slice(my_string.length-n , my_string.length);
    return answer;
}

// slice : 배열 일부분 자르기

// slice(음수) : 배열의 끝에서부터 자름 
// slice (-n) : 뒤에 n자리 
function solution(my_string, n) {
    return my_string.slice(-n)
}

