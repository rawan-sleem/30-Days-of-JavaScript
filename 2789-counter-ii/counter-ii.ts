type Counter = { 
    increment: () => number, 
    decrement: () => number, 
    reset: () => number, 
}

function createCounter(init: number): Counter {
    let n = init; // To store current value 

    return {
        increment: () => ++n,  // O(1)
        decrement: () => --n,  // O(1)
        reset: () => (n = init), // O(1)
    };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */