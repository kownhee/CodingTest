// 인프런 > 투포인터 알고리즘 > 공통인수 구하기
// sort() : 문자로 변경하여 사전순으로 sort 
// arr.sort((a,b)=>a-b) ; 정렬기준을 주면 숫자 정렬됨

function solution(arr1 , arr2){

    let answer=[];
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);

    let p1=p2=0;
    while(p1<arr1.length && p2<arr2.length){
        if(arr1[p1]===arr2[p2]) {
            answer.push(arr1[p1++]);
            p2++;
        } else if(arr1[p1]<arr2[p2]){
            p1++;
        }else{
            p2++;
        }
    }
    return answer;
}

let a=[1,3,9,5,2];
let b=[3,2,5,7,8];
console.log(solution(a,b));