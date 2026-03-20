// Using the const variable type, make a variable called "wins" and set it to any number above 5. (When assigning a number to a variable, you cannot use quotes, "5")

// const { use } = require("react");

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

// function SavingCalc(paycheck) {
//   this.percent = 0.3;
//   this.paycheck = paycheck;

//   this.deposit = function () {
//     return this.percent * this.paycheck;
//   };
// }

// const piggyBank = new SavingCalc(2000);
// piggyBank.deposit();

// // Intercambio de valores de variables
// let playerOne = "Tiffany";
// let playerTwo = "Kristine";

// let tempPlayerOne = playerOne;
// let tempPlayerTwo = playerTwo;

// playerOne = tempPlayerTwo;
// playerTwo = tempPlayerOne;

// [playerOne, playerTwo] = [playerTwo, playerOne];

// console.log(`
// Player One: ${playerOne}
// Player Two: ${playerTwo}
// `);

// // Inside the below function, swap the values of right lane and left lane.

// function roadRage() {
//   let rightLane = "Chevy";
//   let leftLane = "Honda";

//   [rightLane, leftLane] = [leftLane, rightLane];
//   return `That ${rightLane} and ${leftLane} won't pick a lane`;
// }

// roadRage();

// // Destructuración
// const apiList = [
//   "https://api.dailysmarty.com/posts",
//   "https://api.github.com/users/jordanhudgens/repos",
//   "https://api.github.com/users/jordanhudgens",
// ];

// const [posts, repos, profile] = apiList;

// console.log(posts);
// console.log(repos);
// console.log(profile);

// const user = {
//   name: "Kristine",
//   email: "kristine@devcamp.com",
// };

// const renderUser = ({ name, email }) => {
//   console.log(`${name}: ${email}`);
// };

// renderUser(user);

// // You need to check on your bank info but can't get the information to show up. Find the missing code and the one syntax error so the test can pass!

// const bank = {
//   accountNum: 454812259,
//   name: "John Doe",
//   balance: 1257,
// };

// const bankInfo = ({ accountNum, name, balance }) => {
//   return `Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`;
// };

// bankInfo(bank);

// // Valor por defecto en Destructuracion de objecto como argumento

// const blog = {
//   title: "My great post",
//   summary: "Summary of my post",
// };

// const openGraphMetadata = ({ title, summary = "A DailySmarty Post" }) => {
//   console.log(`
//     og-title=${title}
//     og-description=${summary}
//   `);
// };

// openGraphMetadata(blog);

// Spread operator
// Combining Arrays
// let shoppingCarts = [345, 375, 765, 123];
// let newItems = [98, 123];

// shoppingCart.push(...newItems);
// console.log(shoppingCarts); // [345, 375, 765, 123, 98, 123]

// // Copying Arrays
// const shoppingCart = [345, 375, 765, 123];
// const updatedCart = [...shoppingCart];
// updatedCart.push(5);
// console.log(updatedCart);
// console.log(shoppingCart);

// const orderTotals = [1, 5, 1, 10, 2, 3];
// console.log(Math.max(...orderTotals));

// // [1, 5, 1, 10, 2, 3]
// // ...[1, 5, 1, 10, 2, 3]
// // 1, 5, 1, 10, 2, 3

// const { starter, closer, ...relievers } = {
//   starter: "Verlander",
//   closer: "Giles",
//   relief_1: "Morton",
//   relief_2: "Gregerson",
// };

// console.log(starter);
// console.log(closer);
// console.log(relievers);

// Método .bind para unir una funcion externa con un Objecto
// const userOne = {
//   firstName: "Kristine",
//   lastName: "Hudgens",
// };

// const userTwo = {
//   firstName: "Tiffany",
//   lastName: "Hudgens",
// };

// // Function expression
// const fullName = function () {
//   return `${this.lastName}, ${this.firstName}`;
// };

// // Nope!
// // const fullName = () => {
// //   return `${this.lastName}, ${this.firstName}`;
// // };

// const kristine = fullName.bind(userOne);
// const tiffany = fullName.bind(userTwo);

// kristine();
// tiffany();

// // Chequeo si dos objecto tienen el mismo valor

// const isEqual = (obj1, obj2) => {
//   const obj1Keys = Object.keys(obj1);
//   const obj2Keys = Object.keys(obj2);

//   if (obj1Keys.length !== obj2Keys.length) {
//     return false;
//   }

//   for (let objKey of obj1Keys) {
//     if (obj1[objKey] !== obj2[objKey]) {
//       return false;
//     }
//   }

//   return true;
// };

// const obj1 = {
//   name: "Kristine",
//   age: 13,
//   favorites: {
//     food: "Pizza",
//     vacation: "Disneyland",
//   },
// };

// const obj2 = {
//   name: "Kristine",
//   age: 13,
//   favorites: {
//     food: "Pizza",
//     vacation: "Disneyland",
//   },
// };

// obj1 == obj2;
// isEqual(obj1, obj2);

// // Clases OOP(Programacion orientada a objecyo)

// class Instructor {
//   constructor({ name }) {
//     this.name = name;
//   }
// }

// const jon = new Instructor({ name: "Jon Snow" });
// console.log(jon.name);

class Instructor {
  constructor({ name, role = "assistant" }) {
    this.name = name;
    this.role = role;
  }

  renderDetails() {
    console.log(`${this.name}: ${this.role}`);
  }
}

const jon = new Instructor({ name: "Jon Snow" });
const brayden = new Instructor({ name: "Brayden", role: "teacher" });
jon.renderDetails();
brayden.renderDetails();

// You're in the market for a new car but want it to be electric. Create an instance of the Car class called model3. The year must be a number (so don't wrap it in quotation marks). Set the brand to "Tesla" and change the poweredBy to "electricity".

// class Car {
//   constructor({ year, brand, poweredBy = "gas" }) {
//     this.year = year;
//     this.brand = brand;
//     this.poweredBy = poweredBy;
//   }

//   carSpecs() {
//     return `The ${this.year} ${this.brand} runs on ${this.poweredBy}`;
//   }
// }

// const model3 = new Car({
//   year: 2026,
//   brand: "Tesla",
//   poweredBy: "electricity",
// });
// model3.carSpecs();

// // Método static

// class Instructor {
//   constructor({ name, role = "assistant" }) {
//     this.role = role;
//     this.name = name;
//   }

//   // Instance method
//   renderDetails() {
//     console.log(`${this.name} - ${this.role}`);
//   }

//   // Base case static method
//   static helloWorld() {
//     console.log("Hi there");
//   }

//   // Static method
//   static canTeach(instructor) {
//     return instructor.role === "classroom";
//   }
// }

// let juniorInstructor = new Instructor({ name: "Brian" });
// let seniorInstructor = new Instructor({ name: "Alice", role: "classroom" });

// juniorInstructor.renderDetails(); // "Brian - assistant"
// seniorInstructor.renderDetails(); // "Alice - classroom"

// Instructor.helloWorld(); // "Hi there"

// // "Brian can teach: false"
// console.log(
//   `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`,
// );

// // "Alice can teach: true"
// console.log(
//   `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`,
// );

// Now you're in the market for a new home and need to compare some things first. Instantiate an object called choice1 and set the type to "house". It must return true. Instantiate another object called choice2 and the type must be set to "apartment" and that must return false.

// class Home {
//   constructor({ type, payment = "renting" }) {
//     this.type = type;
//     this.payment = payment;
//   }

//   static homeImprovement(yourHome) {
//     return yourHome.payment === "mortgage";
//   }
// }

// //Write your code here
// const choice1 = new Home({ type: "house", payment: "mortgage" });
// const choice2 = new Home({ type: "apartment" });

// Home.homeImprovement(choice1);
// Home.homeImprovement(choice2);

// function potencia(num, potencia) {
//   const myArr = new Array(potencia).fill(num);
//   return myArr.reduce((acc, num) => acc * num, 1);
// }
// console.log(potencia(2, 8));

// // Promesas em JS

// let sleepyGreeting = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello....");
//   }, 2000);

//   setTimeout(() => {
//     reject(Error("Too sleepy..."));
//   }, 2000);
// });

// sleepyGreeting
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// // Promesa All
// const greeting = new Promise((resolve, reject) => {
//   resolve("Hi there");
//   reject("Oops, bad greeting");
// });

// const updateAccount = new Promise((resolve, reject) => {
//   resolve("Updating last login...");
//   reject("Error updating account with login.");
// });

// const loginActivities = Promise.all([greeting, updateAccount]);

// loginActivities.then((res) => {
//   res.forEach((activity) => {
//     console.log(activity);
//   });
// });

// Async/await
// const login = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("User logged in...");
//     }, 2000);
//   });
// };

// const updateAccount = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Updating last login...");
//     }, 2000);
//   });
// };

// async function loginActivities() {
//   const returnedLogin = await login();
//   console.log(returnedLogin);

//   const returnedUpdateAccount = await updateAccount();
//   console.log(returnedUpdateAccount);
// }

// loginActivities();

async function asincrona() {
  const data = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
  const datos = await data.json();
  console.log(datos.text);
}
asincrona();

// Try/catch
async function queryApis() {
  try {
    const postsPromise = fetch("http://api.dailysmarty.com/posts");
    const posts = await postsPromise.then((res) => res.json());
    console.log(posts);
  } catch (err) {
    console.log(err);
    console.log("There was an error with the DailySmarty API");
  }

  try {
    const reposPromise = fetch(
      "https://api.github.com/users/jordanhudgens/repos",
    );
    const repos = await reposPromise.then((res) => res.json());
    console.log(repos);
  } catch (err) {
    console.log(err);
    console.log("There was an error with the GitHub API");
  }
}

queryApis();

// Iteracion sobre un Objecto

const weightedLottery = (weights) => {
  // keep track of your  weights
  // ['green', 'yellow', 'yellow', 'red', 'red', 'red']
  let containerArray = [];

  Object.keys(weights).forEach((key) => {
    for (let i = 0; i < weights[key]; i++) {
      containerArray.push(key);
    }
  });

  return containerArray[(Math.random() * containerArray.length) | 0];
};

const weights = {
  winning: 1,
  losing: 1000,
};

weightedLottery(weights);

// There are 2 syntax errors in the below code. Find and fix them to make the test pass.

function adminActions(func) {
  return func();
}

buttons = () => {
  return "<button>Admin Dashboard</button>";
};

try {
  console.log(adminActions(buttons));
} catch (error) {
  console.log("No admin is logged in", error);
}
