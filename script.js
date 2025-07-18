if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html'; // Ganti dengan nama file login kamu
  }

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }
}

song.addEventListener("timeupdate", () => {
    progress.value = song.currentTime;
});

progress.oninput = function(){
    song.currentTime = progress.value;
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
}


