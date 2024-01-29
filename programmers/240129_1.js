// 코딩테스트 연습 > 코딩테스트 입문 > k의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
    var answer = 0;
    for(let x=i; x<=j; x++){
        const s = String(x).split('');
        for(let y=0; y<s.length; y++){
            if(s[y].includes(k)) answer++;
        }
    }
    return answer;
}