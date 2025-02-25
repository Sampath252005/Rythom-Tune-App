console.log("Hello song");
let songtime = 0;
let songsIndex = 0;
let heartlike = 0;
let audioElement = new Audio(
  "songs/_Lungi_Dance_Chennai_Express__New_Video_Feat._Honey_Singh,_Shahrukh_Khan,_Deepika(256k).mp3"
);
let masterplay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("MyProgressBar");
let slideSongs = Array.from(document.getElementsByClassName("slide"));
let masterSongName = document.getElementById("masterSongName");
let Mastersongimg = document.getElementById("masterSongimg");
let masterTimeStamp = document.getElementById("masterTimestamp");

let songs = [
  {
    songname: "Lungi Dance",
    filePath:
      "songs/_Lungi_Dance_Chennai_Express__New_Video_Feat._Honey_Singh,_Shahrukh_Khan,_Deepika(256k).mp3",
    coverPath: "images/LungiDance.jpeg",
    dataSrc:
      "songs/_Lungi_Dance_Chennai_Express__New_Video_Feat._Honey_Singh,_Shahrukh_Khan,_Deepika(256k).mp3",
  },
  {
    songname: "BisiluKudre Ondhu",
    filePath:
      "songs/Googly_-_Bisilu_Kudreyondu_Full_Song_Video___Yash,_Kriti_Kharbanda(256k).mp3",
    coverPath: "images/BisiluKudureondu.jpeg",
    dataSrc:
      "songs/Googly_-_Bisilu_Kudreyondu_Full_Song_Video___Yash,_Kriti_Kharbanda(256k).mp3",
  },
  {
    songname: "Buttaboma",
    filePath:
      "songs/Butta_Bomma_Full_Song_With_Telugu_Lyrics__Maa_Paata_Mee_Nota___Ala_Vaikunthapurramuloo___Allu_Arjun(256k).mp3",
    coverPath: "images/Buttabomma.jpeg",
    dataSrc:
      "songs/Butta_Bomma_Full_Song_With_Telugu_Lyrics__Maa_Paata_Mee_Nota___Ala_Vaikunthapurramuloo___Allu_Arjun(256k).mp3",
  },
  {
    songname: "Coca Cola",
    filePath:
      "songs/Coka_2.0_-_Film_Version_-_Liger_Vijay_Deverakonda,_Ananya_Panday_Lijo;_Dj_Chetas(256k) - Copy.mp3",
    coverPath: "images/CocaCola.jpeg",
    dataSrc:
      "songs/Coka_2.0_-_Film_Version_-_Liger_Vijay_Deverakonda,_Ananya_Panday_Lijo;_Dj_Chetas(256k) - Copy.mp3",
  },
  {
    songname: "Illiminalti",
    filePath:
      "songs/Illuminati_Aavesham_Jithu_Madhavan_Fahadh_Faasil_Sushin_Shyam,Dabzee,Vinayak__Nazriya_Anwar_Rasheed(256k).mp3",
    coverPath: "images/Illuminati.jpeg",
    dataSrc:
      "songs/Illuminati_Aavesham_Jithu_Madhavan_Fahadh_Faasil_Sushin_Shyam,Dabzee,Vinayak__Nazriya_Anwar_Rasheed(256k).mp3",
  },
  {
    songname: "Kutti Story",
    filePath:
      "songs/Master_-_Kutti_Story_Video___Thalapathy_Vijay___Anirudh_Ravichander___Lokesh_Kanagaraj(256k).mp3",
    coverPath: "images/KuttiStory.jpg",
    dataSrc:
      "songs/Master_-_Kutti_Story_Video___Thalapathy_Vijay___Anirudh_Ravichander___Lokesh_Kanagaraj(256k).mp3",
  },
  {
    songname: "Manasilaayo",
    filePath:
      "songs/Manasilaayo_Video___Vettaiyan___Rajinikanth___Anirudh_Ravichander___Manju_Warrier___T.J._Gnanavel(256k).mp3",
    coverPath: "images/Manasilaayo.jpeg",
    dataSrc:
      "songs/Manasilaayo_Video___Vettaiyan___Rajinikanth___Anirudh_Ravichander___Manju_Warrier___T.J._Gnanavel(256k).mp3",
  },
  {
    songname: "One Two Three",
    filePath:
      "songs/One_Two_Three_Four_Chennai_Express_Full_Video_Song___Shahrukh_Khan,_Deepika_Padukone(256k).mp3",
    coverPath: "images/OneTWoThree.jpeg",
    dataSrc:
      "songs/One_Two_Three_Four_Chennai_Express_Full_Video_Song___Shahrukh_Khan,_Deepika_Padukone(256k).mp3",
  },
  {
    songname: "What Jumukha",
    filePath:
      "songs/What_Jhumka__-Video___Rocky_Aur_Rani_Kii_Prem_Kahaani___Ranveer,_Alia,_Arijit,_Jonita,Pritam,Amitabh(256k).mp3",
    coverPath: "images/WhatJhumka.jpeg",
    dataSrc:
      "songs/What_Jhumka__-Video___Rocky_Aur_Rani_Kii_Prem_Kahaani___Ranveer,_Alia,_Arijit,_Jonita,Pritam,Amitabh(256k).mp3",
  },
  {
    songname: "Saree ke Fallse",
    filePath:
      "songs/Saree_Ke_Fall_Sa__Full__Video__-_R...Rajkumar_Pritam_Shahid___Sonakshi_Antara___Nakash(256k).mp3",
    coverPath: "images/SareeKe Fallse.jpeg",
    dataSrc:
      "songs/Saree_Ke_Fall_Sa__Full__Video__-_R...Rajkumar_Pritam_Shahid___Sonakshi_Antara___Nakash(256k).mp3",
  },
];
slideSongs.forEach((element, i) => {
  if (i < songs.length) {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("h2")[0].innerText = songs[i].songname;
    element
      .querySelector(".fa-circle-play")
      .setAttribute("data-src", songs[i].dataSrc);
  }
});
const updatemasterplay = (index) => {
  masterSongName.textContent = songs[index].songname;
};
slideSongs.forEach((element, i) => {
  let audio = new Audio(songs[i].filePath);
  audio.addEventListener("loadedmetadata", () => {
    let durationInSeconds = audio.duration;
    let minutes = Math.floor(durationInSeconds / 60);
    let seconds = Math.floor(durationInSeconds % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let info = element.getElementsByClassName("info")[0];
    if (info) {
      let timeStamp = info.querySelector("#timeStamp");
      if (timeStamp) {
        timeStamp.innerText = `${minutes}:${seconds}`;
      }
    }
  });
});
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime < 0) {
    audioElement.play();
    makeAllPlays();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    document.getElementById(`${songsIndex}`).classList.remove("fa-circle-play");
    document.getElementById(`${songsIndex}`).classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    document
      .getElementById(`${songsIndex}`)
      .classList.remove("fa-circle-pause");
    document.getElementById(`${songsIndex}`).classList.add("fa-circle-play");
  }
  updatemasterplay(songsIndex);
});
audioElement.addEventListener("timeupdate", () => {
  let progress = (audioElement.currentTime / audioElement.duration) * 100;
  myProgressBar.value = Math.floor(progress);
});
myProgressBar.addEventListener("change", () => {
  if (!isNaN(audioElement.duration)) {
    audioElement.currentTime =
      (myProgressBar.value / 100) * audioElement.duration;
  }
});
const makeAllPlays = () => {
  // Reset all play buttons to the "play" state
  Array.from(document.getElementsByClassName("info")).forEach((element) => {
    element.querySelector("i").classList.remove("fa-circle-pause");
    element.querySelector("i").classList.add("fa-circle-play");
  });
};
let slides = document.getElementsByClassName("slide");
Array.from(slides).forEach((element) => {
  element.addEventListener("click", (e) => {
    let clickedSongIndex = parseInt(e.target.id);

    if (isNaN(clickedSongIndex)) return;
    if (clickedSongIndex === songsIndex) {
      if (audioElement.paused) {
        audioElement.play();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
      } else {
        audioElement.pause();
        e.target.classList.remove("fa-circle-pause");
        e.target.classList.add("fa-circle-play");
      }
    } else {
      makeAllPlays();
      songsIndex = clickedSongIndex;
      audioElement.src = songs[songsIndex].dataSrc;
      audioElement.currentTime = 0;
      audioElement.play();
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
    }
    masterplay.classList.toggle("fa-circle-pause", !audioElement.paused);
    masterplay.classList.toggle("fa-circle-play", audioElement.paused);
    Mastersongimg.src = songs[songsIndex].coverPath;
    updatemasterplay(songsIndex);
  });
});

audioElement.addEventListener("ended", () => {
  if (songsIndex >= songs.length - 1) {
    songsIndex = 0;
  } else {
    songsIndex++;
  }
  makeAllPlays();
  document.getElementById(`${songsIndex}`).classList.remove("fa-circle-play");
  document.getElementById(`${songsIndex}`).classList.add("fa-circle-pause");
  audioElement.src = songs[`${songsIndex}`].dataSrc;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
  updatemasterplay(songsIndex);
});
function playSelectedSong(index = songsIndex) {
  audioElement.src = songs[index].dataSrc;
  audioElement.currentTime = 0;
  audioElement.play();
  makeAllPlays();
  document.getElementById(`${index}`).classList.remove("fa-circle-play");
  document.getElementById(`${index}`).classList.add("fa-circle-pause");
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
  updatemasterplay(index);
  Mastersongimg.src = songs[index].coverPath; 
}

document.getElementById("next").addEventListener("click", () => {
  songsIndex = (songsIndex + 1) % songs.length;
  playSelectedSong(songsIndex);
  updatemasterplay(songsIndex);
  Mastersongimg.src = songs[songsIndex].coverPath;
});
document.getElementById("previous").addEventListener("click", () => {
  songsIndex = (songsIndex - 1 + songs.length) % songs.length;
  playSelectedSong(songsIndex);
  updatemasterplay(songsIndex);
  Mastersongimg.src = songs[songsIndex].coverPath;
});
audioElement.addEventListener("timeupdate", () => {
  let progress = (audioElement.currentTime / audioElement.duration) * 100;
  myProgressBar.value = Math.floor(progress);
  let currentMinutes = Math.floor(audioElement.currentTime / 60);
  let currentSeconds = Math.floor(audioElement.currentTime % 60);
  currentSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;
  masterTimeStamp.textContent = `${currentMinutes}:${currentSeconds}`;
});
const restaudio = () => {
  audioElement.pause();
  audioElement.currentTime = 0;
  myProgressBar.value = 0;
  masterTimeStamp.textContent = "0:00";
  index = songsIndex;
  // Reset button logic to restart audio and update UI properly
  audioElement
    .play()
    .then(() => {
      makeAllPlays();
      document.getElementById(`${index}`).classList.remove("fa-circle-play");
      document.getElementById(`${index}`).classList.add("fa-circle-pause");
      masterplay.classList.remove("fa-circle-play");
      masterplay.classList.add("fa-circle-pause");
    })
    .catch((error) => {
      console.error("Audio playback error:", error);
    });
};

// Attach event listener to the reset button
document
  .getElementsByClassName("resetButton")[0]
  .addEventListener("click", restaudio);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".Heart-Icon").addEventListener("click", () => {
    const heart = document.querySelector(".Heart-Icon");
    if (heartlike === 0) {
      heart.style.color = "red";
      heartlike = 1;
    } else {
      heart.style.color = " #f1f4f8";
      heartlike = 0;
    }
  });
});

let volumeButttom = document.querySelector(".Volume");
let volumeState = 0;
const rotateVolume = () => {
  switch (volumeState) {
    case 0:
      audioElement.volume = 0;
      volumeButttom.classList.replace('fa-volume-high','fa-volume-off');
      volumeState = 1;
      break;
    case 1:
      audioElement.volume = 0.5;
      volumeButttom.classList.replace('fa-volume-off','fa-volume-low');
      volumeState = 2;
      break;
    case 2:
      audioElement.volume = 1;
      volumeButttom.classList.replace('fa-volume-low','fa-volume-high');
      volumeState = 0;
      break;
  }
};
audioElement.volume=1;
volumeButttom.addEventListener('click',rotateVolume);

let shuffleButtton=document.querySelector('.shufflebutton');
// Shuffle function using Fisher-Yates algorithm
const shuffleArray=(array)=>{
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleButtton.addEventListener('click', () => {
  // Shuffle the songs array
  shuffleArray(songs);
  audioElement.pause();
  audioElement.currentTime = 0;
  // Update the visual representation of songs
  slideSongs.forEach((element, i) => {
    if (i < songs.length) {
      element.getElementsByTagName("img")[0].src = songs[i].coverPath;
      element.getElementsByTagName("h2")[0].innerText = songs[i].songname;
      const playbutton=element.querySelector(".fa-circle-play");
      if(playbutton)
      {
      playbutton.setAttribute("data-src", songs[i].dataSrc);
      }
    }
  });

  // Reset the current song index to the first song after shuffling
  if(audioElement.paused||audioElement.currentTime===0)
  {
  songsIndex = 0;
  audioElement.src = songs[songsIndex].dataSrc;
  audioElement.currentTime = 0;
  audioElement.play();
  makeAllPlays();
  document.getElementById(`${songsIndex}`).classList.remove("fa-circle-play");
  document.getElementById(`${songsIndex}`).classList.add("fa-circle-pause");
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
  Mastersongimg.src = songs[songsIndex].coverPath;
  updatemasterplay(songsIndex);
  }
  else{
    updatemasterplay(songsIndex);
    Mastersongimg.src = songs[songsIndex].coverPath;
  }
});
document.querySelector(".UserIcon").addEventListener("click", function() {
  let div = document.querySelector(".account");
  if (div.style.display === "none" || div.style.display === "") {
      div.style.display = "block";
  } else {
      div.style.display = "none";
  }
});

