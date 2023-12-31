// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// 코딩테스트 연습 > 해시 > 완주하지 못한 선수

function solution(participant, completion) {
    var answer = '';
    const map = new Map();
    for(let i=0; i<participant.length; i++){
        let a=participant[i] , b=completion[i];
        
        map.set(a, (map.get(a) || 0) + 1);
        map.set(b ,(map.get(b) || 0) - 1);
    }
    for(let [k,v] of map){
        if(v>0)  return k;
    }
    return 'nothing';
}
