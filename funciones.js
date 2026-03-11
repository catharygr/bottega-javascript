// function hiThere() {
//   console.log("Hi there");
// }

// hiThere(); // Hi there

// function hiThereTwo() {
//   return "Hi there again";
// }

// hiThereTwo(); // "Hi there again"

// var storedText = hiThere(); // Hi there

// storedText; // undefined

// var storedTextTwo = hiThereTwo();

// storedTextTwo; // "Hi there again"

// Fill in the return statement below with some of the string function syntax you just learned!

// var userObj = {
//   email: "sample@example.com",
//   fullName: "Kristine Hudgens",
// };

// function dashboardGreeting() {
//   var userObj = {
//     email: "sample2@example.com",
//     fullName: "Jordan Hudgens",
//   };
//   console.log("Hi there, ".concat(userObj.fullName));
// }

// dashboardGreeting();
// console.log(userObj.fullName);

// Argumentos y parametros en una funcion
// function fullName(firstName, lastName, language) {
//     var language = language || 'English';
//     return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
// }

// console.log(fullName('Jordan', 'Hudgens', 'Spanish'));

// Referenciacon valor
// var someUser = {
//     name: 'Jordan'
// }

// function nameFormatter (user) {
//     return user.name = 'Oops';
// }

// nameFormatter(someUser); // "Oops"

// someUser; // Object {name: "Oops"}

// var someName = 'Tiffany';

// function someOtherNameFormatter(name) {
//     return name = 'Oops';
// }

// someOtherNameFormatter(someName); // "Oops"

// someName; // "Tiffany"

// function nameFormatter (userName) {
//     return userName = 'Oops';
// }

// someUser.name; // "Oops"

// someUser.name = 'Kristine';

// nameFormatter(someUser.name); // "Oops"

// someUser.name; // "Kristine"

// Funciones Closures

function closures() {
  const saludar = "Hello Maria";

  return function () {
    return saludar;
  };
}
const saludos = closures();
console.log(saludos());

function battingAverage() {
  var hits = 100;
  var atBats = 300;

  return {
    getCurrentAverage: function () {
      return hits / atBats;
    },
    updateHitsAndAtBats: function (hit, atBat) {
      hits += hit;
      atBats += atBat;
    },
  };
}

var altuve = battingAverage();
console.log(altuve.getCurrentAverage());
altuve.updateHitsAndAtBats(0, 20);
console.log(altuve.getCurrentAverage());

// Take the variable roomOne and call the function on it to return the seats remaining.

function movieTheater() {
  var seats = 50;
  var seatsSold = 28;

  return {
    remainingSeats: function () {
      return seats - seatsSold;
    },
  };
}

var roomOne = movieTheater();

// call the remainingSeats method of the instace of movieTheater
roomOne.remainingSeats();

// // Manipulación del DOM
// const miH1 = (document.querySelector("h1").innerText = "Hola caracola");

// // This en JS
// $(".btn-guide").click(function (event) {
//   event.preventDefault();
//   console.log($(this));
// });

// var guide = {
//   title: 'Guide to Programming',
//   content: 'Content goes here...',
//   visibleToUser: function (viewingUserRole) {
//     if (viewingUserRole === 'paid') {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   renderContent: function(userRole) {
//     if (this.visibleToUser(userRole)) {
//       console.log(this.title + " - " + this.content);
//     } else {
//       this.content = '';
//       console.log(this.title + " - " + this.content);
//     }
//   }
// }

// user = { role: 'paid' };
// guide.renderContent(user.role);
