console.log("lets writew js")
var audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterPlay');
let progressBar = document.querySelector(".progressBar");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let songindex = 1;
let songname = document.getElementById("songname");
let btn = document.getElementById('btn');
let i = 1;
let gotocredits = document.querySelector(".fa-angles-right");
let goback = document.querySelector(".fa-angles-left");
let shuffle = document.getElementById("shuffleButton");

masterplay.addEventListener("click", () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        let songclass = parseInt(audioElement.duration);
        console.log(songclass)
        document.querySelector(`.a${songclass}`).classList.remove("fa-play")
        document.querySelector(`.a${songclass}`).classList.add("fa-pause")
        sname = document.getElementById(`${songindex}name`)
        song = document.getElementById(`${songindex}`)
        songname.innerHTML = sname.innerText;

    }
    else {
        audioElement.pause();
        masterplay.classList.remove("fa-pause")
        masterplay.classList.add("fa-play")
        let songclass = parseInt(audioElement.duration);
        document.querySelector(`.a${songclass}`).classList.remove("fa-pause");
        document.querySelector(`.a${songclass}`).classList.add("fa-play")

    }
})
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})
progressBar.addEventListener("change", () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;

})
function playpause() {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })

}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener("click", () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            playpause();
            element.classList.remove("fa-play");
            element.classList.add("fa-pause");
            songindex = parseInt(element.id);
            element.style.color = "white";
            audioElement.src = `${songindex}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterplay.classList.remove("fa-play");
            masterplay.classList.add("fa-pause");
            sname = document.getElementById(`${songindex}name`)
            song = document.getElementById(`${songindex}`)
            songname.innerHTML = sname.innerText;

        }
        else {
            audioElement.pause()
            playpause();
            element.classList.remove("fa-pause");
            element.classList.add("fa-play");
            masterplay.classList.remove("fa-pause");
            masterplay.classList.add("fa-play");
        }


    })
})

gotocredits.addEventListener("click", () => {
    document.querySelector(".useless").style.display = "none";
    document.querySelector(".creditscontainer").style.display = "flex";
})
goback.addEventListener("click", () => {
    document.querySelector(".useless").style.display = "block";
    document.querySelector(".creditscontainer").style.display = "none";
})


shuffle.addEventListener("click", () => {
    songindex = Math.round(1 + Math.random() * 11);
    console.log(songindex)
    audioElement.pause()
    audioElement.src = `${songindex}.mp3`
    audioElement.currentTime = 0;
    audioElement.play()
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    sname = document.getElementById(`${songindex}name`)
    songname.innerHTML = sname.innerText;
    song = document.getElementById(`${songindex}`)
    sname = document.getElementById(`${songindex}name`)
    song = document.getElementById(`${songindex}`)
    songname.innerHTML = sname.innerText;
    playpause()
    song.classList.remove("fa-play");
    song.classList.add("fa-pause");

    let playedsong = [];
    audioElement.onended = () => {
        function nextsong() {
    
            if(playedsong.length===12){
                playedsong=[];
            }
            do{
                songindex = Math.round(1 + Math.random() * 11);
                // console.log(songindex);              
            }
            while(playedsong.indexOf(songindex)!==-1) 
            playedsong.push(songindex);

            audioElement.src = `${songindex}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            playpause()
            sname = document.getElementById(`${songindex}name`)
            song = document.getElementById(`${songindex}`)
            song.classList.remove("fa-play");
            song.classList.add("fa-pause");
            masterplay.classList.remove("fa-play");
            masterplay.classList.add("fa-pause");
            songname.innerHTML = sname.innerText
        
        }
        setTimeout(nextsong, 2000)

    }

})

next.addEventListener("click", () => {
    songindex += 1;
    if (songindex > 12) {
        songindex = 1
    }
    audioElement.src = `${songindex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    playpause()
    sname = document.getElementById(`${songindex}name`)
    song = document.getElementById(`${songindex}`)
    song.classList.remove("fa-play");
    song.classList.add("fa-pause");
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    songname.innerHTML = sname.innerText

})
previous.addEventListener("click", () => {
    songindex -= 1;
    if (songindex < 1) {
        songindex = 12
    }
    audioElement.src = `${songindex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    playpause()
    song = document.getElementById(`${songindex}`)
    song.classList.remove("fa-play");
    song.classList.add("fa-pause");
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    sname = document.getElementById(`${songindex}name`)
    songname.innerHTML = sname.innerText
})
audioElement.onended = () => {
    function nextsong() {
        songindex += 1;
        if (songindex > 12) {
            songindex = 1
        }
        audioElement.src = `${songindex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        playpause()
        sname = document.getElementById(`${songindex}name`)
        song = document.getElementById(`${songindex}`)
        song.classList.remove("fa-play");
        song.classList.add("fa-pause");
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        songname.innerHTML = sname.innerText
    }
    setTimeout(nextsong, 2000)

}