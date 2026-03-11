// var names, city, age;
// names = "Kristine";
// city = "Scottsdale";
// age = 12;

// console.log(age);
// console.log(names);
// console.log(city);

// var
// var age = 12;
// console.log(age);

// var age = 15; // yep!
// console.log(age);

// let
// let age = 12;
// console.log(age);

// let age = 15; // nope!
// console.log(age);

// Hoisted
// names = 'Kristine';
// console.log(names); // 'Kristine'
// var name;

// // Initializers not hoisted
// console.log(age); // undefined
// var age = 33;

// Tipos de datos en JS
// Boolean
// var truthy = true;
// var notTruthy = false;

// // Null
// var nully = null;

// // Undefined
// var notDefined;

// // Number
// var age = 12;

// // String
// var name = "Kristine";
// var nameTwo = 'Jordan';

// // Symbol
// var mySym = Symbol('foo');

// console.log(mySym);

// Objectos en JS
// var user = {
//   name: 'Kristine',
//   age: 12,
//   city: 'Scottsdale',
//   grades: {
//     math: 90,
//     science: 80,
//     languageArts: 100
//   }
// }
// user.age = 13;
// user.grades.coding = 95;

// Typeof(Para saber el tipo de dato)
// typeof 12;
// // "number"

// typeof "Astros";
// // "string"

// typeof true;
// // "boolean"

// typeof { name: "Kristine" };
// // "object"

// var age;
// // undefined

// typeof age;
// // "undefined"

// age = null;
// // null

// typeof age;
// // "undefined"

// Convertir los datos (String, toString, Number)

// let stringo = 43;
// console.log(String(stringo));
// // console.log(stringo.toString());

// "100" + 42; // "10042"
// 42 + "100"; // "42100"
// "100" - 42; // 58
// 100 + null; // 100

// var ageOne = 12;
// String(ageOne); // '12'
// ageOne.toString(); // '12'

// var ageTwo = "33";
// Number(ageTwo); // 33
// parseInt(ageTwo); // 33
// parseFloat(ageTwo); // 33
// +ageTwo; // 33
// parseInt("5555555555 is my phone number"); // 5555555555
// parseInt("foo 5555555555 is my phone number"); // NaN para que te devuelva el numero tiene que estar sin ninguna letra delante
// Number("100") + 42; // 142

// Number(true); // 1
// Number(false); // 0
