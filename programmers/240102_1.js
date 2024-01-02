// https://school.programmers.co.kr/learn/courses/30/lessons/120826
// 코딩테스트 연습 > 코딩테스트 입문 > 특정 문자 제거하기

function solution(my_string, letter) {
    var answer = '';
    answer = my_string.replaceAll(letter,'');
    return answer;
}

// string.split(separator , limit)
// 문자열을 separator로 잘라서, limit크기 이하의 배열에 
// 잘라진 문자열을 저장하여 리턴
function solution(my_string,letter)
{
    const answer = my_string.split(letter).join('');
    return answer;
}
