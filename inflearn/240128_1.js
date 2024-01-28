// 동적알고리즘 > 최대부분증가수열(LIS)

function solution(arr){
    let answer=0;
    let dy=Arr.from({length:arr.length},()=>0);
    dy[0]=1;
    for(let i=1; i<arr.length; i++){
        let max=0;
        for(let j=i-1; j>=0; j--){
            if(arr[j]<arr[i] && dy[j]>max){
                max=dy[j];
            }
        }
        dy[i]=max+1;
        answer=Math.max(answer,dy[i]);
    }
    return answer;
}