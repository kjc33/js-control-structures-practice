//Equality with Numbers

let x = 10;

if (x > 10 || x < 10) {
    console.log("X is greater than or less than 10.");
} else {
    console.log("X is 10.");
}

// Equality with Strings

let day = "Monday";

if (day === "Saturday" || day === "Sunday") {
    console.log("Hooray for the weekend");
} else {
    console.log("Go to work!");
}

// else/if Statements

let budget = 40;

if (budget > 50) {
    console.log("Take a taxi!")
} else if (budget > 30 && budget <= 50) {
    console.log("Take the bus!")
} else if (budget > 10 && budget <= 30) {
    console.log("Take the train")
} else {
    console.log("Walk!");
}

//Switch Case Statement
const environment = "testing";
switch(environment) {
    case "production":
        console.log("Production Environment");
        break
    case "staging":
        console.log("Staging Environment");
        break
    default:
        console.log("Default environment");
}

// while Loop

let whileCount = 0; // Notice that it starts with 0 and ends at 9

while (whileCount < 5) {
    console.log(whileCount);
    whileCount++;
}

let anotherWhileCount = 0; // Notice that it starts with 1 and runs to 10; demonstrates the single threaded nature of JS

while (anotherWhileCount < 5) {
    anotherWhileCount++;
    console.log(anotherWhileCount);
}    

//do while Loop

let doWhileCount = 0;

do {
    console.log("Do while count", doWhileCount);
    doWhileCount++;
} while (doWhileCount < 5);

// for Loop

for (i=0; i < 5; i++) {
    console.log("For Count", i);
}

// Height of a Tree 

const treeHeight = 7;

// Loop to Draw the Tree

for(let i = 1; i <= treeHeight; i++) {
    //create spaces for indentation
    const spaces = " ".repeat(treeHeight - i);

    // create asterisks for the tree branches
    const stars = "*".repeat(2 * i - 1);

    //combine spaces and stars for each row
    const treeRow = spaces + stars;

    //log the tree row to the console
    console.log(treeRow);
}

// draw the tree trunk
const trunkWidth = 3;
const trunkHeight = 1;

for (let i = 0; i < trunkHeight; i++) {
    const spaces = " ".repeat(treeHeight - trunkWidth / 2);
    const trunk = "#".repeat(trunkWidth);
    console.log(spaces + trunk);
}

// Generate a random number between 1 and 100

const targetNumber = Math.floor(Math.random() * 100) + 1;

let guess;
let attempt = 0;
let isGameOver = false;

do {
    guess = prompt("Guess a number between 1 and 100.");

    if (isNaN(guess)) {
        alert("Please enter a valid number!");
    } else {
        attempt++;
    }

        if (guess < targetNumber) {
            alert("Too low! Please try again.")
        } else if (guess > targetNumber){
            alert("Too High! Please try again.")
        } else {
            isGameOver = true;
            alert("Correct! You guessed the number in " + attempt + " attempts!")
        }        
} while (!isGameOver);