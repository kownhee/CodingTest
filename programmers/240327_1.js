// https://school.programmers.co.kr/learn/courses/30/lessons/120893
// 코딩테스트 연습 > 코딩테스트 입문 > 대문자와 소문자

function solution(my_string) {
    var answer = '';
    for(let x of my_string){
        if(x===x.toUpperCase()){
            answer+=x.toLowerCase();
        }else{
            answer+=x.toUpperCase();
        }
    }
    
    return answer;
}
