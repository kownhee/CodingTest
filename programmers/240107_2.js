// https://school.programmers.co.kr/learn/courses/30/lessons/120809
// 코딩테스트 연습 > 코딩테스트 입문 > 배열 두 배 만들기

function solution(numbers) {
    var answer = [];
    answer = numbers.map((num) => num*2)
    return answer;
}

// reduce 함수는 배열의 각 요소에 대해 주어진 콜백 함수를 실행하고,
// 그 결과를 누적하여 최종값을 반환
function solution(numbers) {
    return numbers.reduce((a,b) => [...a , b*2], []);
}

