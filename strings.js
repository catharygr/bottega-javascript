// Funciones y métodos que manipulan cadenas
// var str = 'The quick brown fox jumped over the lazy dog';

// str.length(); // VM2349:1 Uncaught TypeError: str.length is not a function

// str.length; // 44

// str.charAt(2); // "e"

// str.charAt(200); // ""

// str.concat(' again and again'); // "The quick brown fox jumped over the lazy dog again and again"

// str; // "The quick brown fox jumped over the lazy dog"

// str.includes('quick'); // true

// str.endsWith('dog'); // true

// str.startsWith('Foo'); // false

// str.repeat(5); // "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"

// str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // null

// '555-555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // (4) ["555-555-5555", "555-", undefined, "555-", index: 0, input: "555-555-5555"]0: "555-555-5555"1: "555-"2: undefined3: "555-"index: 0input: "555-555-5555"length: 4__proto__: Array(0)

// str.replace('fox', 'wolf'); // "The quick brown wolf jumped over the lazy dog"

// '555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 0

// 'Hi, 555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 4

// str.indexOf('jumped'); // 20

// str.lastIndexOf('jumped'); // 20

// var str2 = str.concat('again and again');

// str2.indexOf('again'); // 44
// str2.lastIndexOf('again'); // 54

// str.slice(4, 10); // "quick "

// str.slice(-8); // "lazy dog"

// str.slice(10); // "brown fox jumped over the lazy dog"

// str.toUpperCase(); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"

// str.toLowerCase(); // "the quick brown fox jumped over the lazy dog"

// var messyString = '    Hi there    ';

// messyString.trim(); // "Hi there"

// Operadores aritmeticos
// 2 + 2; // 4

// 2 - 2; // 0

// 2 / 2; // 1

// 2 * 10; // 20

// 5 % 2; // 1

// 10 % 2; // 0

// 8 % 2; // 0

// 2 ** 10; // 1024

// var num = 2;

// num++; // 2

// ++num; // 4

// num; // 4

// num--; // 4

// num; // 3

// --num; // 2

// 2++; // VM3506:1 Uncaught ReferenceError: Invalid left-hand side expression in postfix operation

// ++2; // VM3508:1 Uncaught ReferenceError: Invalid left-hand side expression in prefix operation

// var someNum = 10;

// var someOtherNum = -someNum; // Convierte el numero positivo en negativo

// someOtherNum; // -10

// var strNum = '100';

// var convertedNum = + strNum;

// convertedNum; // 100

// Operadores de asignación
// var name = 'Tiffany';

// var sum = 0;

// var gradeOne = 100;

// var gradeTwo = 80;

// sum += gradeOne; // 100

// sum; // 100

// sum += gradeTwo; // 180

// sum *= gradeTwo; // 14400

// Orden de opraciones en JS
/* Order of Operations
   PEMDAS -> PEDMAS
   Please Excuse My Dear Aunt Sally
   Paranthesis
   Exponents
   Multiplication 5 / 5 * 4
   Division
   Addition
   Subtraction
*/

// var num = 5 + (5 * 10) / 6**2 - 1;
// var num = 5 / 5 * 4;

let myArray = [1, 2, 3];

let sum = myArray.reduce((acc, num) => acc + num, 0);
let average = sum / myArray.length;

console.log(average); // 2

// let myArray = [1, 2, 3];

// let sum = 0;

// for (let i = 0; i < myArray.length; i++) {
//   sum += myArray[i];
// }

// let average = sum / myArray.length;

// console.log(average); // 2
