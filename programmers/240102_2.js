// https://school.programmers.co.kr/learn/courses/30/lessons/120905/solution_groups?language=javascript
// 코딩테스트 연습 > 코딩테스트 입문 > n의 배수 고르기

function solution(n, numlist) {
    return numlist.filter(num => num%n === 0);
}
