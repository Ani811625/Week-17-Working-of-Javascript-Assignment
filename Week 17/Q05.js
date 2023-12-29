// Example block scope
{
    // Attempt to log the value before assignment
    console.log("Before assignment:", letVar); // ReferenceError: Cannot access 'letVar' before initialization

    // Declare a variable using let
    let letVar = "I am a let variable";

    // Log the value after assignment
    console.log("After assignment:", letVar);  // I am a let variable
}

// Variables are not accessible outside the block scope
// console.log("Outside block scope:", letVar); // ReferenceError: letVar is not defined
