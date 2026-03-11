// Condicionales
// var age = 10;
// var ageTwo = "12";

// if (age === ageTwo) {
//   console.log("They are equal");
// }

// if (age !== ageTwo) {
//   console.log("Not equal");
// }

// if (age >= 25) {
//   console.log("Old enough to rent a car");
// }

// if (age <= 10) {
//   console.log("You can eat from the kid menu");
// }

// var age = 30;

// if (age <= 10) {
//   console.log('You can eat from the kid menu');
// } else {
//   console.log('Adult menu time for you');
// }

// We recognize that there is a hole is this code logic covering ages 11 -15. As was discussed in the lesson this does happen.
// Try playing with the code and fixing the hole in the logic for practice.
// var age = 30;

// if (age <= 10) {
//   console.log("You can eat from the kid's menu");
//   console.log("You are not old enough to drive");
//   console.log("You are not old enough to rent a car");
// } else if (age >= 16 && age < 25) {
//   console.log("You can not eat from the kid's menu");
//   console.log("You are old enough to drive");
//   console.log("You are not old enough to rent a car");
// } else if (age >= 25) {
//   console.log("You can not eat from the kid's menu");
//   console.log("You are old enough to drive");
//   console.log("You are old enough to rent a car");
// }

// condicional Switch
// var dataPoint = {};

// switch (typeof dataPoint) {
//   case "string":
//     console.log("It's a string");
//     break;
//   case "number":
//     console.log("It's a number");
//     break;
//   case "boolean":
//     console.log("It's a boolean");
//     break;
//   default:
//     console.log('No matches');

// Operadores ternarios
function verificarEdad(edad) {
  console.log(edad > 25 ? "Puedes conducir" : "No puedes conducir");
}

verificarEdad(15);

function ageVerification(age) {
  // if (age > 25) {
  //   console.log('can rent a car');
  // } else {
  //   console.log("can't rent a car");
  // }

  return age > 25 ? "can rent a car" : "can't rent a car";
}

ageVerification(30); //?
ageVerification(10); //?

function adminControls(user) {
  // if (user) {
  //   if (user.admin) {
  //     return 'showing admin controls...';
  //   } else {
  //     return 'You need to be an admin';
  //   }
  // } else {
  //   return 'You need to be logged in';
  // }

  return user
    ? user.admin
      ? "showing admin controls"
      : "You need to be an admin"
    : "you need to be logged in";
}

const userOne = {
  name: "Kristine",
  admin: true,
};

adminControls(userOne); //?

const userTwo = null;

adminControls(userTwo); //?

const userThree = {
  name: "Tiffany",
  admin: false,
};

adminControls(userThree); //?
