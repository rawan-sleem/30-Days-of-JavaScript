// Time -> O(1) as it return const number 
// Space -> O(1) as it store const number 
// Idea -> it return the number then increament it 

var createCounter = function (n:number){
    return ()=> n++; 
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */