// Get our elements
    const player = document.querySelector(".player");
    const video = player.querySelector(".viewer");
    const progress = player.querySelector(".progress");
    const progressBar = player.querySelector(".progress_filled");
    const toggle = player.querySelector(".toggle");
    const skipButtons = player.querySelector("[data-skip]");
    const ranges = player.querySelector(".player_slider");

// Build our functions

    function togglePlay () {
        const method = video.paused ? "play" : "pause";
        video[method]();
    };

// Hook up the event listeners

    video.addEventListener("click", togglePlay);