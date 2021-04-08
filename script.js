(() => {
  function playDrum(event) {
    const tom1Audio = new Audio("./sounds/tom-1.mp3");
    const tom2Audio = new Audio("./sounds/tom-2.mp3");
    const tom3Audio = new Audio("./sounds/tom-3.mp3");
    const tom4Audio = new Audio("./sounds/tom-4.mp3");
    const snareAudio = new Audio("./sounds/snare.mp3");
    const crashAudio = new Audio("./sounds/crash.mp3");
    const kickAudio = new Audio("./sounds/kick-bass.mp3");
    let drum = event.target;
    let keyCode = event.key;

    if (drum.classList.contains("w") || keyCode === "w") {
      tom1Audio.play();
    } else if (drum.classList.contains("a") || keyCode === "a") {
      tom2Audio.play();
    } else if (drum.classList.contains("s") || keyCode === "s") {
      tom3Audio.play();
    } else if (drum.classList.contains("d") || keyCode === "d") {
      tom4Audio.play();
    } else if (drum.classList.contains("j") || keyCode === "j") {
      snareAudio.play();
    } else if (drum.classList.contains("k") || keyCode === "k") {
      crashAudio.play();
    } else if (drum.classList.contains("l") || keyCode === "l") {
      kickAudio.play();
    }
  }

  function run() {
    const drumElements = document.querySelectorAll(".drum");
    drumElements.forEach((drumElement) => {
      drumElement.addEventListener("click", playDrum);
      document.addEventListener("keydown", playDrum);
    });
  }

  run();
})();
