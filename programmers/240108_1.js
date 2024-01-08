// https://school.programmers.co.kr/learn/courses/30/lessons/120825
// 코딩테스트 연습 > 코딩테스트 입문 > 문자 반복 출력하기

function solution(my_string, n) {
    var answer = '';
    for(let x=0; x<my_string.length; x++){
         for(let y=0; y<n; y++){
            answer=answer+my_string[x];
         }             
    }
    return answer;
}

function solution(my_string , n){
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    return answer;
}
