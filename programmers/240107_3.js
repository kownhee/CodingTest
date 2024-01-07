// https://school.programmers.co.kr/learn/courses/30/lessons/120849
// 코딩테스트 연습 > 코딩테스트 입문 > 모음 제거

function solution(my_string)
{
    var answer='';
    answer = my_string.replce(/['a','e','i','o','u']/g,'');
    return answer;
}

// my_string.replace(/[aeiou]/g,'');