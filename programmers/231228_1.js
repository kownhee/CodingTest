// https://school.programmers.co.kr/learn/courses/30/lessons/181889?language=javascript
// 코딩테스트 연습 > 코딩 기초 트레이닝 > n 번째 원소까지


function solution(num_list, n) {
    var answer = [];
    for (let i=0; i<n; i++){
        answer.push(num_list[i]);
    }
    return answer;
}


function solution(num_list , n){
    return num_list.slice(0,n);
}
