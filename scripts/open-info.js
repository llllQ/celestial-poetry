// const openInfo = () => {
//   const infoIcon = document.querySelector(".info-icon");
//   const infoContent = document.querySelector(".info-container");

//   infoIcon.addEventListener("click", () => {
//     infoIcon.classList.toggle("closed");
//   });
// };

// openInfo();

const openNav = () => {
  const navIcons = document.querySelectorAll(".nav-icon");
  const nav = document.querySelector(".navigation");

  navIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  });
};

openNav();
