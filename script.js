const box = document.getElementById("box");
box.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    box.style.right = x + "px";
    box.style.top = y + "px";
});

const audioElement = new Audio();

let audioIndex = 0;
 const audioSource =[
"audios/drumbeat.mp3",
"audios/heartbeat.mp3",
"audios/repetitivebeat.mp3"
 ]

let isPlaying = false;

let moveButtonInterval = null;

function PlayNextAudio(){
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.src = audioSource[audioIndex];
    audioIndex = (audioIndex + 1) % audiosource.length;
    audioElement.play();
    isPlaying = true;
}

box.addEventListener("click", ()=>{
    if(!isPlaying){
        PlayNextAudio();
    }
    else{
        PlayNextAudio();    
    }
})