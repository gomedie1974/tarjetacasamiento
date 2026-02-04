  AOS.init();

  // COUNTDOWN
  const eventDate = new Date("2026-12-14T18:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
    document.getElementById("minutes").innerText = Math.floor((diff / (1000 * 60)) % 60);
    document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
  }, 1000);

  

  const asistencia = document.getElementById("asistencia");
  const cantidadBox = document.getElementById("cantidadBox");

  asistencia.addEventListener("change", () => {
    if (asistencia.value === "si") {
      cantidadBox.classList.remove("d-none");
    } else {
      cantidadBox.classList.add("d-none");
    }
  });

  

  function openGallery(src) {
    document.getElementById("galleryImg").src = src;
    document.getElementById("galleryModal").style.display = "flex";
  }

  function closeGallery() {
    document.getElementById("galleryModal").style.display = "none";
  }



  const music = document.getElementById("bgMusic");
  const control = document.getElementById("musicControl");
  let isPlaying = false;
  let fadeInterval;

  function fadeIn() {
    clearInterval(fadeInterval);
    music.volume = 0;
    fadeInterval = setInterval(() => {
      if (music.volume < 0.6) {
        music.volume += 0.05;
      } else {
        clearInterval(fadeInterval);
      }
    }, 100);
  }

  function fadeOut() {
    clearInterval(fadeInterval);
    fadeInterval = setInterval(() => {
      if (music.volume > 0.05) {
        music.volume -= 0.05;
      } else {
        music.pause();
        music.volume = 0.6;
        clearInterval(fadeInterval);
      }
    }, 100);
  }

  function toggleMusic() {
    if (!isPlaying) {
      localStorage.setItem("music", "on");
      music.play().then(() => {
        fadeIn();
        isPlaying = true;
        control.classList.add("playing");
      });
    } else {
      localStorage.setItem("music", "off");
      fadeOut();
      isPlaying = false;
      control.classList.remove("playing");
    }
  }
    document.addEventListener("visibilitychange", () => {
    if (document.hidden && isPlaying) {
      music.pause();
    }
  });

