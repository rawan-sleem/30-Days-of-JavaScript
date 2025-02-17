/*
Time  O(n)
Space  O(n)
idea -> like built-in fiter() function 
Test Case : numbers = [1,2,3,4,5,6]  isEven = (n:number) => n%2 ===0 
arr[i]   1,2,3,4,5,6
i        0,1,2,3,4,5
fn       F,T,F,T,F,T
finterationArray [2,4,6]
*/


type Fn = (n: number, index: number) => boolean // true -> element passes the filteration and is included in the output array  , false -> is skipped 

function filter(arr: number[], fn: Fn): number[] {
    const filterationArray : number[] = [] ; 
    for(let i=0 ; i<arr.length ; i++){
        if(fn(arr[i] , i)){
            filterationArray.push(arr[i])
        }
    }
    return filterationArray; 
};