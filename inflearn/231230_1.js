// 인프런 > 자바스크립트 문제풀이
// 문자열 탐색 > 회문문자열
function solution(s){
    let answer="YES";
    s=s.toLowerCase();

    let len=s.length;
    for(let i=0; i<Math.floor(len/2); i++){
        if(s[i] !== s[len-i-1]){
            return "NO";
        }
    }
    return answer;
}
// s.split('') => ["g","o","o","g"]
// s.reverse() => 문자열 뒤집어줌
// s.split('').join('') => 쪼갠 문자를 다시 문자열로 만들어줌

function solution(s){
    let answer="YES";
    s=s.toLowerCase();
    if(s.split('').reverse().join('')!==s) return "NO"
    return answer;
}
