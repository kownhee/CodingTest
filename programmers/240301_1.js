// 코딩테스트 연습 > 코딩 기초 트레이닝 > 부분 문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/181842

function solution(str1, str2) {
    var answer = 0;
    if(str2.includes(str1))
        answer=1;
    else
        answer=0;
    return answer;
}


const solution = (str1, str2) => str2.includes(str1) ? 1:0;
