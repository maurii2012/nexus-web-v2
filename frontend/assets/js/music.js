const music = document.getElementById("bg-music");
const btn = document.getElementById("music-toggle");

let playing = false;

if (localStorage.getItem("nexus_music") === "on") {
  music.volume = 0.15;
  music.play().catch(() => {});
  playing = true;
  btn.textContent = "⏸ Música";
}

btn.addEventListener("click", () => {

  if (!playing) {
    music.volume = 0.15;
    music.play();
    btn.textContent = "⏸ Música";
    localStorage.setItem("nexus_music", "on");
  } else {
    music.pause();
    btn.textContent = "▶ Música";
    localStorage.setItem("nexus_music", "off");
  }

  playing = !playing;
});