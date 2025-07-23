let songIndex=0;
let audioElement=new Audio('one.mp3')
let masterPlay=document.getElementById("master-play");
let progressBar=document.getElementById("progress-bar")
let gif=document.getElementById("gif")
let songItem=Array.from(document.getElementsByClassName("song-item"))
const playSong=document.querySelector(".master-song-name")

let song=[
    {name:"one",filePath:"song/1.mp3",coverPath:"cover/one.jpg"},
    {name:"two",filePath:"song/2.mp3",coverPath:"cover/two.jpg"},
    {name:"three",filePath:"song/3.mp3",coverPath:"cover/three.jpg"},
    {name:"four",filePath:"song/4.mp3",coverPath:"cover/four.jpg"},
    {name:"five",filePath:"song/5.mp3",coverPath:"cover/five.jpg"},
    {name:"six",filePath:"song/6.mp3",coverPath:"cover/six.jpg"},
]    

songItem.forEach((element,i)=>{
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src=song[i].coverPath
    element.getElementsByClassName("song-name")[0].innerText=song[i].name
})

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause")
        gif.style.opacity=1
    }
    else{
        audioElement.pause();
        masterPlay.classList.add("fa-play")
        masterPlay.classList.remove("fa-pause")
        gif.style.opacity=0
    }   
})
audioElement.addEventListener('timeupdate',()=>{
  currentTime=audioElement.currentTime
  totalTime=audioElement.duration
  progress=parseInt((currentTime/totalTime)*100)
  progressBar.value=progress
})   

progressBar.addEventListener("change",()=>{
  totalTime=audioElement.duration
  audioElement.currentTime=progressBar.value*totalTime/100
})   

playButton=Array.from(document.getElementsByClassName("play-button"))

playButton.forEach((element)=>{
    element.addEventListener("click",(e)=>{
    // console.log(e.target)

    songIndex=parseInt(e.target.id)
     console.log(songIndex)

    makeAllPlay()

    e.target.classList.remove("fa-play")
    e.target.classList.add("fa-pause")

    audioElement.src=song[songIndex-1].filePath
    audioElement.currentTime=0
    audioElement.play()

    masterPlay.classList.add("fa-pause")
    masterPlay.classList.remove("fa-play")

    playSong.innerText=song[songIndex-1].name
    })
})

const makeAllPlay=()=>{
    playButton.forEach((element)=>{
        element.classList.remove("fa-pause")
        element.classList.add("fa-play")
    }) 
}

previous=document.querySelector(".previous")
forward=document.querySelector(".forward")

forward.addEventListener("click",()=>{
    if(songIndex>song.length-1){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src=song[songIndex-1].filePath
    audioElement.currentTime=0
    audioElement.play()

    masterPlay.classList.remove("fa-play")
    masterPlay.classList.add("fa-pause")
    playSong.innerText=song[songIndex-1].name
})

previous.addEventListener("click",()=>{
 
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    audioElement.src=song[songIndex-1].filePath
    audioElement.currentTime=0
    audioElement.play()

    masterPlay.classList.remove("fa-play")
    masterPlay.classList.add("fa-pause")
    playSong.innerText=song[songIndex-1].name
})
