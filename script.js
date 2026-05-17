// const person = {
//   name: "Easin",
//   age: 23,
//   food: "kacci Biriyani",
//   isRich: false,
//   money: 1000,
// };
// console.log(person, typeof person);
// //
// const personJson = JSON.stringify(person);
// console.log(personJson, typeof personJson);
// //
// const parsJson = JSON.parse(personJson);
// console.log(parsJson, typeof parsJson);

const result = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
