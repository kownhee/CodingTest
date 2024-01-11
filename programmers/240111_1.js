// https://school.programmers.co.kr/learn/courses/30/lessons/120892
// 코딩테스트 연습 > 코딩테스트 입문 > 암호 해독

function solution(cipher, code) {
    var answer = '';
    for(let i=code-1; i<cipher.length; i+=code){
        answer= answer + cipher[i];
    }
    return answer;
}

// split() : 문자열을 지정한 구분자를 이용하여 여러개의 문자열로 나눔
// filter는 배열을 사용하며 주어진 함수를 만족하는 모든 요소를 새 배열로 반환함
function solution(cipher , code)
{
    return cipher.split('').filter((v,i)=>(i+1) % code ===0).join('');
}
