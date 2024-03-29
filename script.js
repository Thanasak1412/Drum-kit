(() => {
  const drumElements = document.querySelectorAll(".drum");

  function removePressed(element) {
    setTimeout(() => {
      element.classList.remove("pressed");
    }, 100);
  }

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
    const drumEvent = document.querySelectorAll(".drum");

    if (drum.classList.contains("w") || keyCode === "w") {
      tom1Audio.play();
      drumEvent[0].classList.add("pressed");
      removePressed(drumEvent[0]);
    } else if (drum.classList.contains("a") || keyCode === "a") {
      tom2Audio.play();
      drumEvent[1].classList.add("pressed");
      removePressed(drumEvent[1]);
    } else if (drum.classList.contains("s") || keyCode === "s") {
      tom3Audio.play();
      drumEvent[2].classList.add("pressed");
      removePressed(drumEvent[2]);
    } else if (drum.classList.contains("d") || keyCode === "d") {
      tom4Audio.play();
      drumEvent[3].classList.add("pressed");
      removePressed(drumEvent[3]);
    } else if (drum.classList.contains("j") || keyCode === "j") {
      snareAudio.play();
      drumEvent[4].classList.add("pressed");
      removePressed(drumEvent[4]);
    } else if (drum.classList.contains("k") || keyCode === "k") {
      crashAudio.play();
      drumEvent[5].classList.add("pressed");
      removePressed(drumEvent[5]);
    } else if (drum.classList.contains("l") || keyCode === "l") {
      kickAudio.play();
      drumEvent[6].classList.add("pressed");
      removePressed(drumEvent[6]);
    }
  }

  function run() {
    drumElements.forEach((drumElement) => {
      drumElement.addEventListener("click", playDrum);
    });
    document.addEventListener("keydown", playDrum);
  }

  run();
})();
