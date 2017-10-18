class Jukebox{

  constructor(){
    this.songs = [];
    this.currentSong = 0;
    this.numSongs = 0;
  }
  nextSong(){
    this.stop();
    this.currentSong++;
    if(this.currentSong > this.numSongs-1){
      this.currentSong = 0;
    }
    this.play();
  }
  prevSong(){
    this.stop();
    if(this.currentSong < 1){
      this.currentSong = this.numSongs - 1;
    } else{
      this.currentSong--;
    }
    this.play();
  }
  play(){
    this.songs[this.currentSong].play();
  }
  pause(){
    this.songs[this.currentSong].pause();
  }
  stop(){
    this.songs[this.currentSong].pause();
    this.songs[this.currentSong].currentTime = 0;
  }
  addSong(song){
    this.songs.push(song);
    this.numSongs++;
  }
}

var myJukeBox = new Jukebox();
var junoreactor = new Audio('music/junoreactor.mp4');
var nightwish = new Audio('music/nightwish.mp4');
var gloryhammer = new Audio('music/gloryhammer.mp4');
myJukeBox.addSong(junoreactor);
myJukeBox.addSong(nightwish);
myJukeBox.addSong(gloryhammer);
myJukeBox.play();

document.getElementById("pause").addEventListener("click", () => myJukeBox.pause() );
document.getElementById("play").addEventListener("click", () => myJukeBox.play() );
document.getElementById("stop").addEventListener("click", () => myJukeBox.stop() );
document.getElementById("next").addEventListener("click", () => myJukeBox.nextSong() );
document.getElementById("prev").addEventListener("click", () => myJukeBox.prevSong() );
