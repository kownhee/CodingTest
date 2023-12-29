// https://school.programmers.co.kr/learn/courses/30/lessons/181940
// 코딩테스트 연습 > 코딩 기초 트레이닝 > 문자열 곱하기

function solution(my_string, k) {
    var answer = '';
    for(let i=0; i<k; i++){
        answer+=my_string;
    }
    return answer;
}

// repeat(k) => 주어진 문자열을 옵션의 count만큼 반복하여 붙여 새로운
// 문자열로 반환하는 함수
// string.repeat(반복count)
function solution(my_string, k) {
 let answer =  my_string.repeat(k)
 return answer
}
