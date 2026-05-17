const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      displayPosts(data);
    });
};
// array of Object
const displayPosts = (posts) => {
  // ``````````````````1 get Container`````````````````````````````
  const postContainer = document.getElementById("post-container");
  posts.forEach((post) => {
    //`````````````````   creat html Element```````````````````````````
    const li = document.createElement("li");
    li.innerText = post.title;
    // console.log(li);
    //`````````````````````` add li into container`````````````````````````
    postContainer.appendChild(li);
  });
};
