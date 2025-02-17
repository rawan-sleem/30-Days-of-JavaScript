/*
TIme O(n)
Space O(1) 
Idea -> like built-in reduce method (Apply fn on each element and store result in accu)
Test Case -> 
nums = [1,2,3,4]  , fn = (accum:number , curr: number) => accum + curr ; 
Start from index 0 
accum = 1 + 2 =3 -> +3 = 6 -> + 4 = 10 

*/


type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let accum =init
    for(let i=0 ; i<nums.length ; i++){
           
         accum = fn(accum , nums[i]) // Aply reduce  function 
    }
    return accum ; 
};