// 인프런 > 자바스크립트 문제풀이
// 문자열탐색 > 팰린트롬

// replace(정규식)
// (/[^a-z]/g, '') => a부터 z까지가 아닌것들 / 모든문자에서
// 을 '' 빈문자로 바꿔라 
// 알파벳만 뽑아라 

// str.replace("찾을 문자열", "변경할 문자열")
// 특정 문자를 다른 문자로 치환
function solution(s){
    let answer="YES";
    s=s.toLowerCase().replce(/[^a-z]/g ,'');
    if(s.split('').reverse().join('')!==s) return "NO"
    return answer;
}