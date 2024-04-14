// https://school.programmers.co.kr/learn/courses/30/lessons/120841
// 코딩테스트 연습 > 코딩테스트 입문 > 점의 위치 구하기

function solution(dot) {
    if(dot[0]>0 && dot[1]>0) return 1;
    if(dot[0]<0 && dot[1]>0) return 2;
    if(dot[0]<0 && dot[1]<0) return 3;
    if(dot[0]>0 && dot[1]<0) return 4;
}

function solution(dot){
    const [num1, num2] = dot;
    const check = num1 * num2 > 0;
    return num>0 ? (check ? 1:4) : (check ? 3:2);
}