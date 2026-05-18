const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPosts(data);
    });
};

const displayPosts = (posts) => {
  // get the container and remove container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    // creat element div
    const postCard = document.createElement("div");
    postCard.innerHTML = `
     <div class="post-card">
        <h2>${post.title}</h2>
        <p>
         ${post.body}
        </p>
      </div>
    `;
    postContainer.append(postCard);
  });
};
loadPost();

// array of Object
// const displayPosts = (posts) => {
//   // ``````````````````1 get Container`````````````````````````````
//   const postContainer = document.getElementById("post-container");
//   postContainer.innerHTML = "";
//   posts.forEach((post) => {
//     //`````````````````   creat html Element```````````````````````````
//     const li = document.createElement("li");
//     li.innerText = post.title;
//     // console.log(li);
//     //`````````````````````` add li into container`````````````````````````
//     postContainer.appendChild(li);
//   });
// };
