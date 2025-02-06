document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.

  const button = document.getElementById("changeColors");
  let posts = document.getElementsByTagName("li");

  button.addEventListener("click", function() {
      // post.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      console.log("I was clicked");
      changeColors(posts);
  });

  function changeColors(posts) {
    console.log("Calling changeColors fn()");
    console.log(posts);
    console.log
    for (i = 0; i < posts.length; i ++) {
      console.log("In for loop");
      posts[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
  }
   
});

