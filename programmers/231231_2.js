// https://school.programmers.co.kr/learn/courses/30/lessons/181892
// 코딩테스트 연습 > 코딩 기초 트레이닝 > n 번째 원소부터

function solution(num_list, n) {
    var answer = [];
    answer = num_list.slice(n-1,num_list.length);
    return answer;
}


// slice => 배열 일부분 잘라내어 새로운 배열 리턴
// str.slice(시작인덱스,[끝인덱스])
// 끝 인덱스는 생략가능 

function solution(num_list, n) {
  return num_list.slice(n - 1);
}