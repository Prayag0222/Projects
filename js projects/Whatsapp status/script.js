const statuses = [
    {
        name: "Aarav Sharma",
        profilePicture: "https://i.pravatar.cc/150?img=12",
        uploaded: "5 hours ago",
        story: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" // Source: Pexels
    },
    {
        name: "Rohan Gupta",
        profilePicture: "https://i.pravatar.cc/150?img=25",
        uploaded: "9 hours ago",
        story: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" // Source: Unsplash
    },
    {
        name: "Ananya Singh",
        profilePicture: "https://i.pravatar.cc/150?img=47",
        uploaded: "12 hours ago",
        story: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" // Source: Pexels
    },
    {
        name: "Kabir Patel",
        profilePicture: "https://i.pravatar.cc/150?img=36",
        uploaded: "14 hours ago",
        story: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" // Source: Unsplash
    },
    {
        name: "Pooja Nair",
        profilePicture: "https://i.pravatar.cc/150?img=44",
        uploaded: "16 hours ago",
        story: "https://images.pexels.com/photos/1690171/pexels-photo-1690171.jpeg" // Source: Pexels
    },
    {
        name: "Aditya Rao",
        profilePicture: "https://i.pravatar.cc/150?img=49",
        uploaded: "18 hours ago",
        story: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6" // Source: Unsplash
    },
    {
        name: "Riya Mehta",
        profilePicture: "https://i.pravatar.cc/150?img=68",
        uploaded: "19 hours ago",
        story: "https://images.unsplash.com/photo-1541233349642-6e425fe6190e" // Source: Unsplash
    },
    {
        name: "Karan Malhotra",
        profilePicture: "https://i.pravatar.cc/150?img=65",
        uploaded: "20 hours ago",
        story: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" // Source: Pexels
    },
    {
        name: "Sanya Kapoor",
        profilePicture: "https://i.pravatar.cc/150?img=57",
        uploaded: "15 hours ago",
        story: "https://images.unsplash.com/photo-1502767089025-6572583495b4" // Source: Unsplash
    }
];

var sum = '';
statuses.forEach(function(elem, idx) {
    sum += `<div class="container">
        <div class="allstatus">
        <img id="${idx}" src="${elem.profilePicture}" alt="">
        <div class="content">
            <h2>${elem.name}</h2>
            <h6>${elem.uploaded}</h6>
        </div>
       </div>`;
});

var main = document.querySelector('.container');
main.innerHTML = sum;

var container = document.querySelector('.container');
var state = document.querySelector('.status')
var fulluser = document.querySelector('.status ')

container.addEventListener('click', function(elem) {
    var golden = statuses[elem.target.id];
    state.style.display = "block";
    state.style.backgroundImage = `url(${golden.story})`;
    fulluser.innerHTML = golden.name;




    setTimeout(function () {
      state.style.display = "none";
    }, 3000);
});