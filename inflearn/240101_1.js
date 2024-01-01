// 인프런 > 해시 > 학급회장 

function solution(s){
    let answer;
    let map = new Map();
    for(let x of s){
        if(map.has(x)) map.set(x,s.get(x)+1);
        else map.set(x,1);
    }
    let max = Number.MIN_SAFE_INTEGER;
    for(let [k,v] of map){
        if(max<v) {
            max=v;
            answer=k;
        }
    }
    return answer;
}