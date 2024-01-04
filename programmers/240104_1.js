// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 코딩테스트 연습 > 코딩테스트 입문 > 배열의 유사도

function solution(s1, s2) {
    return s1.filter((e)=>s2.includes(e)).length;
}

// 여러가지 데이터 중에 원하는 데이터만 뽑아내고 싶다면 
// 어떤 데이터 집합에서 특정 조건을 만족하는 값만 반환을 원할 때 
// filter(특정조건)