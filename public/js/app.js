document.addEventListener("DOMContentLoaded", function () {
  
  const button = document.getElementById("changeColors");
  let posts = document.getElementsByTagName("li");

  button.addEventListener("click", function() {
      changeColors(posts);
  });

  function changeColors(posts) {
    for (i = 0; i < posts.length; i ++) {
      posts[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
  }
   
});

