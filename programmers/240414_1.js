// https://school.programmers.co.kr/learn/courses/30/lessons/120833
// 코딩테스트 연습 > 코딩테스트 입문 > 배열 자르기

function solution(numbers, num1, num2) {
    var answer = [];
    for(var x=num1; x<=num2; x++){
        answer.push(numbers[x]);        
    }
    return answer;
}

//
function solution(numbers, num1 , num2){
    return numbers.filter((n,i) => num1 <= i && i <= num2);
}
