// 인프런 > 해시 > 아나그램 

function solution(str1, str2)
{
    let answer="YES";
    const map = new Map();
    for(let x of str1){
        if(map.has(x)) map.set(x,map.get(x)+1);
        else map.set(x,1);

        // map.set(x,(map.get(x)||0)+1);
    }
    for(let x of str2){
        if(!map.has(x) || map.get(x)===0) return "NO";
        map.set(x,map.get(x)-1);
    }
    
    return answer;
}