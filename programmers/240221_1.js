// https://school.programmers.co.kr/learn/courses/30/lessons/181896
// 코딩테스트 연습 > 코딩 기초 트레이닝 > 첫 번째로 나오는 음수
function solution(num_list) {
    var answer = 0;
    for(let i=0; i<num_list.length; i++){
        if(num_list[i] < 0) return i;
    }
    return -1;
}

//
const solution = num_list => num_list.findIndex(v => v < 0); 

