// 코딩테스트 연습 > 코딩 기초 트레이닝 > 순서 바꾸기
function solution(num_list, n) {
    var answer = [];
    
    let front_list = num_list.slice(0,n);
    let back_list = num_list.slice(n,num_list.length);
    
    
    return [...back_list , ...front_list];
}
