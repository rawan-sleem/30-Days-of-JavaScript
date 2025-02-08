// Time => O(1) as the createHelloWorld -> O(1) as it only returns another function 
//  the inner function takes O(1) as it returns string 
// Space => O(1)
// Idea => when called the createHelloWorld -> returns the arrow function (inner function)

var createHelloWorld = function (){
    return () => "Hello World"; 
}; 

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */