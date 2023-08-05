document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('bgVideo');
  const overlay = document.getElementById('overlay');
  const imageOverlay = document.getElementById('imageOverlay');
  const pauseIcon = document.getElementById('pauseIcon');

  let videoFullyPlayed = false;
  let isVideoPlaying = false;
  let pausedTime = 0;

  function showPauseIcon() {
    pauseIcon.style.display = 'block';
    video.style.filter = 'brightness(30%)';
  }

  function hidePauseIcon() {
    pauseIcon.style.display = 'none';
    video.style.filter = 'brightness(100%)';
  }

  function toggleVideo() {
    if (!isVideoPlaying) {
      if (!videoFullyPlayed) {
        video.currentTime = pausedTime;
        videoFullyPlayed = true;
      }
      video.play();
      isVideoPlaying = true;
      hidePauseIcon();
    } else {
      video.pause();
      isVideoPlaying = false;
      pausedTime = video.currentTime;
      showPauseIcon();
    }
  }

  document.getElementById('learn-more-button').addEventListener('click', function () {
    imageOverlay.style.display = 'none';
    overlay.style.display = 'none';
    toggleVideo();
  });

  document.getElementById('bgVideo').addEventListener('click', function () {
    if (videoFullyPlayed) {
      toggleVideo();
    }
  });

  pauseIcon.addEventListener('click', function () {
    toggleVideo();
  });

  video.addEventListener('ended', function () {
    videoFullyPlayed = true;
    overlay.style.display = 'block';
    imageOverlay.style.display = 'block';
    hidePauseIcon();
  });

  document.getElementById('menuToggle').addEventListener('click', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menuContainer = document.getElementById('menuContainer');

    // Toggle the 'active' class on the hamburger icon
    menuToggle.classList.toggle('active');

    // Toggle the visibility of the menu container
    menuContainer.classList.toggle('hide');
  });
});
