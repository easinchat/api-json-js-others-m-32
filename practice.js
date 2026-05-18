// const { createElement } = require("react");

const commentBox = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayComment(data);
    });
};
const displayComment = (posts) => {
  const commentContainer = document.getElementById("comment-container");
  commentContainer.innerHTML = "";
  posts.forEach((post) => {
    // console.log(post);
    const comment = document.createElement("div");
    comment.innerHTML = `
    <div class="comment-box">
  <h2>${post.name}</h2>
  <h4>Gmail: ${post.email}</h4>
  <p>${post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>
</div>

    `;
    commentContainer.append(comment);
  });
};
commentBox();
