//Time -> O(1) as it Just check 
// Space -> O(1) stoes val only 

// Test Case : expect(5).toBe(10); 
/* expect(5) -> returns an object with toBe() & notToBe()
toBe(10) -> expected = 10 then compares -> ex = 5  */
type ToBeOrNotToBe = {
    toBe: (expected: any) => boolean;
    notToBe: (expected: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe(expected){  
            if(expected === val ){
                return true; 
            }
            throw new Error ("Not Equal"); 
        } , 
        notToBe(expected){
            if(expected !== val ){
                return true; 
            }
            throw new Error("Equal"); 
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */