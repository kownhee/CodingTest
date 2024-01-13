// https://school.programmers.co.kr/learn/courses/30/lessons/120888
// 코딩테스트 연습 > 코딩테스트 입문 > 중복된 문자 제거


function solution(my_string) {
    var answer = new Set([...my_string]);
    return [...answer].join('');
    // set 객체를 배열로 만들어 join('')을 통해 문자열로 만들어준다 
}

// set 객체는 중복되지 않는 유일한 값들의 집합이다
