// Time -> O(n)
// Space -> O(n)
/* Trace -> 
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }

*/

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  
  const res: number [] = [] ; 
  for (let i =0 ; i<arr.length ; i++){
    res.push(fn(arr[i] , i)); 
  }
  return res; 

};