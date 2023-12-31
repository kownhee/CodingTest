// https://school.programmers.co.kr/learn/courses/30/lessons/181882
// 코딩테스트 연습 > 코딩 기초 트레이닝 > 조건에 맞게 수열 변환하기 1

function solution(arr) {
    var answer = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=50 && arr[i]%2===0){
            answer.push(arr[i]/2);
        }else if(arr[i]<50 && arr[i]%2!==0){
            answer.push(arr[i]*2);
        }else{
            answer.push(arr[i]);
        }
    }
    return answer;
}