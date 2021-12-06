const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
let progressBarWidth = 0;
let currentCircle = 1;

const UpdateProgress = function (e) {
  if (currentCircle >= 1) {
    prevBtn.disabled = false;
  }

  if (currentCircle >= 1 && currentCircle <= circles.length) {
    nextBtn.disabled = false;
  }

  if (e.path[0].id == "next") {
    progressBarWidth += 32;
    progress.style.width = `${progressBarWidth}%`;
    currentCircle++;
    circles.forEach((circle, index) => {
      if (index == currentCircle - 1) {
        circle.classList.add("active");
      }

      if (circles.length == currentCircle) {
        nextBtn.disabled = true;
        nextBtn.classList.add("btn");
      }
    });
  } else {
    progressBarWidth -= 32;
    progress.style.width = `${progressBarWidth}%`;
    currentCircle--;
    circles.forEach((circle, index) => {
      if (index == currentCircle) {
        circle.classList.remove("active");
      }

      if (currentCircle == 1) {
        prevBtn.disabled = true;
        prevBtn.classList.add("btn");
      }
    });
  }
};

nextBtn.addEventListener("click", UpdateProgress);
prevBtn.addEventListener("click", UpdateProgress);
