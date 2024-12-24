const users = [
  {
    username: "Anaya",
    story: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg", // Source: Pexels
    dp: ["https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"],
  },
  {
    username: "Diya",
    story: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg", // Source: Pexels
    dp: ["https://images.pexels.com/photos/1236723/pexels-photo-1236723.jpeg"],
  },
  {
    username: "Ishaan",
    story: "https://images.unsplash.com/photo-1502767089025-6572583495b4", // Source: Unsplash
    dp: ["https://images.unsplash.com/photo-1595152772835-219674b2a8a6"],
  },
  {
    username: "Arjun",
    story: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", // Source: Unsplash
    dp: ["https://images.unsplash.com/photo-1541233349642-6e425fe6190e"],
  },
  {
    username: "Kavya",
    story: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg", // Source: Pexels
    dp: ["https://images.pexels.com/photos/1690171/pexels-photo-1690171.jpeg"],
  },
  {
    username: "Rohan",
    story: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde", // Source: Unsplash
    dp: ["https://images.unsplash.com/photo-1518806118471-f28b20a1d79d"],
  },
];

var sum = "";
users.forEach(function (elem, idx) {
  sum =
    sum +
    ` <div class="profile">
                <img id=${idx} src="${elem.dp[0]}" alt="">
            </div>`;
});
var stories = document.querySelector(".stories");
stories.innerHTML = sum;

stories.addEventListener("click", function (elem) {
  var golden = users[elem.target.id];
  var story = document.querySelector(".story");
  var fulluser = document.querySelector(".story h2");
  var growth = document.querySelector(".growth");

  story.style.display = "block";
  story.style.backgroundImage = `url(${golden.story})`;
  fulluser.innerHTML = golden.username;
  

  var grow = 0;
  var int = setInterval(function () {
    grow++;
    growth.style.width = grow + "%";
  }, 30);

  setTimeout(function () {
    story.style.display = "none";
    clearInterval(int);
  }, 3000);
});
