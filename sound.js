document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("myAudio");
  var status = document.getElementById("status");

  document.getElementById('colorButton').addEventListener('click', function() {
    var audio = document.getElementById('clickSound');
    audio.currentTime = 0;  // Reset the audio to the beginning
    audio.play();
});

  function updateStatus(isPlaying) {
    status.textContent = isPlaying ? "SOUND ON " : "SOUND OFF";
    status.classList.add("show");
    setTimeout(function () {
      status.classList.remove("show");
    }, 2000); // Keep the status visible for 2 seconds
  }

  // Check if audio can autoplay
  audio
    .play()
    .then(function () {
      // Autoplay started
      updateStatus(true);
    })
    .catch(function (error) {
      // Autoplay blocked by browser
      updateStatus(false);
    });

  // Toggle audio playback on click
  status.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      updateStatus(true);
    } else {
      audio.pause();
      updateStatus(false);
    }
  });

  // Update status based on audio state changes
  audio.addEventListener("play", function () {
    updateStatus(true);
  });

  audio.addEventListener("pause", function () {
    updateStatus(false);
  });
});
