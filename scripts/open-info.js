const openInfo = () => {
  const infoIcon = document.querySelector(".info-icon");
  const infoContent = document.querySelector(".info-container");

  infoIcon.addEventListener("click", () => {
    infoIcon.classList.toggle("closed");
  });
};

openInfo();
