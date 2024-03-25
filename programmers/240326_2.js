// https://school.programmers.co.kr/learn/courses/30/lessons/120811
// 코딩테스트 연습 > 코딩테스트 입문 > 중앙값 구하기

function solution(array) {
    return array.sort((a,b) => a-b)[Math.floor(array.length/2)]
}
