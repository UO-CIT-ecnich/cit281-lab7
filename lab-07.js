//Custom Error Class

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
// throwGenericError function
function throwGenericError() {
    throw new Error("Generic error");
}
// throwCustomError function
function throwCustomError() {
    throw new CustomError("Custom error");
}
// Try..catch..finally block for generic error
console.log("Force generic error");
try {
    console.log("Generic error try block");
    throwGenericError()
} catch (error) {
    console.log("Generic error catch block");
    console.error("Error: ", error);
} finally {
    console.log("Generic error finally block");
}

// Try..catch..finally block for custom error
console.log("Force custom error");
try {
    console.log("Custom error try block");
    throwCustomError();
} catch (error) {
    console.log("Custom error catch block");
    console.error("CustomError: ", error);
} finally {
    console.log("Custom error finally block");
}