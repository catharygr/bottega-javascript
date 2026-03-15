// Loop em Array

// let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// for (let arr in arrs) {
//   console.log(arr[arr]);
// }

var players = ["Altuve", "Bregman", "Correa", "Springer"];

// for (let i in players) {
//   console.log(players[i]);
// }

// for (let player of players) {
//   console.log(player);
// }

// players.forEach((player) => console.log(player));

// const newArray = players.map((player) => {
//   return player.concat(" ", crypto.randomUUID());
// });
// console.log(newArray);

// Create an array called "members" with 5 elements. Write a traditional for loop that uses an iterator and iterates through the array and console logs each member

// let members = ["Caty", "Sasa", "Clau", "Zorka", "Simba"];

// for (let i = 0; i < members.length; i++) {
//   console.log(members[i]);
// }

// Loop en Objecto
// var student = {
//   name: 'Kristine',
//   age: 12,
//   city: 'Scottsdale'
// };

// for (var key in student) {
//   console.log(key + " => " + student[key]);
// }

// Create an object called "user". Assign it a username, email, phone and give them values. Console log the data in the same format as the video.

// let user = {
//   username: "Caty",
//   email: "caty@email.com",
//   phone: 123456789,
// };

// for (var key in user) {
//   console.log(key + " => " + user[key]);
// }

// Loop while & do/while

let members = ["Caty", "Sasa", "Clau", "Zorka", "Simba"];

// while (members.length > 0) {
//   const pops = members.pop();
//   console.log(members);
// }

do {
  const pops = members.pop();
  console.log(members);
} while (false);

// In the below starter code, place 4 dog names (elements) of your choice. Write a while loop that iterates through the dogHouse array. The iterator variable must be named "data".

//Please leave the below starter code but fill in the array with 4 elements
var dogHouse = ["Simba", "Kovu", "Aivar", "Danger"];

let data = 0;

while (data < dogHouse.length) {
  console.log(dogHouse[data]);
  data++;
}
