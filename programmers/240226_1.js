// 코딩테스트 연습 > 코딩 기초 트레이닝 > rny_string
// https://school.programmers.co.kr/learn/courses/30/lessons/181863

function solution(rny_string) {
    return rny_string.replace(/m/g,"rn");
}



return [...rny_string].map(e => e == 'rm' ? 'rm':e).join("");

