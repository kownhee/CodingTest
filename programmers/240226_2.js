// 코딩테스트 연습 > 코딩 기초 트레이닝 > 길이에 따른 연산
// https://school.programmers.co.kr/learn/courses/30/lessons/181879

function solution(num_list) {
    var answer = 0;
    if(num_list.length >10){
        answer = num_list.reduce((acc , cur) => acc+cur)
    }else{
        answer = num_list.reduce((acc , cur) => acc*cur)
    }
    return answer;
}



const solution=n=>n.reduce((a,v)=>n.length>10?a+v:a*v);
