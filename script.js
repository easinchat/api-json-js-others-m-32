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

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())

    .then((data) => {
      console.log(data);
      displayPost(data);
    });
};
const displayPost = (posts) => {
  posts.forEach((post) => console.log(post));
};
