// Using the const variable type, make a variable called "wins" and set it to any number above 5. (When assigning a number to a variable, you cannot use quotes, "5")

const wins = 6;

// Inside the below function, write a variable and give it a string that says "It's a trap!" Then on the return use string interpolation to finish the movie line

function movieLine() {
  const frase = "It's a trap!";

  return `Cuidado? ${frase}`;
}

movieLine();

// In the below function's return, use a ternary that returns "1 point", when the ship variable is set to "hit". Otherwise, have it return "You lost a point". Then, set the ship variable to "hit" or "miss".

// Fill in the below code with your requirements

var ship = "miss";

function battleShip() {
  return `${ship === "hit" ? "1 point" : "You lost a point"}`;
}
battleShip();

// Arrow function

const arrowFunc = (suma1, suma2) => {
  return suma1 + suma2;
};

console.log(arrowFunc(4, 4));

// Use a function expression called userInfo with three arguments for city, state, and zip. It must return Lehi, UT 84043.

const userInfo = (city, state, zip) => `${city}, ${state} ${zip}`;

userInfo("Lehi", "UT", "84043");

// Heading generator
function headinGenerator(nivel, contenido) {
  const heading = document.createElement(`h${nivel}`);
  heading.innerText = contenido;
  document.querySelector("body").appendChild(heading);
}

headinGenerator(1, "Hola");

function Invoice(subTotal) {
  this.taxRate = 0.06;
  this.subTotal = subTotal;

  this.total = setInterval(() => {
    console.log(this.taxRate * this.subTotal + this.subTotal);
    // console.log(this);
  }, 2000);
}

// const inv = new Invoice(200);
// inv.total();

// This code snippet represents an unfinished savings calculator. Your goal is to calculate 30 percent of this month's paycheck, totaled at $2000. Pass the paycheck amount in the correct spot and instantiate the object in order to return the correct deposit amount.

function SavingCalc(paycheck) {
  this.percent = 0.3;
  this.paycheck = paycheck;

  this.deposit = function () {
    return this.percent * this.paycheck;
  };
}

const piggyBank = new SavingCalc(2000);
piggyBank.deposit();

// Intercambio de valores de variables
let playerOne = "Tiffany";
let playerTwo = "Kristine";

let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne = tempPlayerTwo;
playerTwo = tempPlayerOne;

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);

// Inside the below function, swap the values of right lane and left lane.

function roadRage() {
  let rightLane = "Chevy";
  let leftLane = "Honda";

  [rightLane, leftLane] = [leftLane, rightLane];
  return `That ${rightLane} and ${leftLane} won't pick a lane`;
}

roadRage();
