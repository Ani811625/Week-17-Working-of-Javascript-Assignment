// Example block scope
{
    // Declare variables using let, var, and const
    console.log("Before declaration:");
    
    console.log("letVar:", letVar);   // ReferenceError: Cannot access 'letVar' before initialization
    console.log("varVar:", varVar);   // undefined
    console.log("constVar:", constVar); // ReferenceError: Cannot access 'constVar' before initialization

    let letVar = "I am a let variable";
    var varVar = "I am a var variable";
    const constVar = "I am a const variable";

    console.log("\nAfter declaration:");
    
    console.log("letVar:", letVar);   // I am a let variable
    console.log("varVar:", varVar);   // I am a var variable
    console.log("constVar:", constVar); // I am a const variable
}

// Variables are not accessible outside the block scope
// console.log("Outside block scope:", letVar, varVar, constVar); // ReferenceError: ... is not defined
