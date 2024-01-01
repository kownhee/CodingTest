// https://school.programmers.co.kr/learn/courses/30/lessons/12906
// 코딩테스트 연습 > 스택/큐 > 같은 숫자는 싫어

function solution(arr)
{
    var st = [] ;
    
    for(let x of arr){
        if(st[st.length-1] !== x) st.push(x);
    }
    
    return st;
}