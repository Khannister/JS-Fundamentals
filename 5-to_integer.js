function checkNumber(input) {
    if (input === null || input === undefined) {
        console.log("Not a number");
        return;
    }
    
    const num = Number(input);
    
    if (Number.isInteger(num)) {
        console.log(`My number: ${num}`);
    } else {
        console.log("Not a number");
    }
}

// Get the first argument (process.argv[2] is the first user argument in Node.js)
const firstArgument = process.argv[2];

checkNumber(firstArgument);