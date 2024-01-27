// 이분검색 
function solution(target , arr){
    let answer;
    arr.sort((a,b) => a-b);
    let lt=0, rt=arr.length-1;
    while(lt<=rt){
        let mid=parseInt((lt+rt)/2);
        if(arr[mid]===target){
            answer = mid+1;
            break;
        }
        else if(arr[mid]>target) rt=mid-1;
        else lt=mid+1;
    }
}