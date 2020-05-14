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
  const createBtn = document.querySelector(".create");
  const viewBtn = document.querySelector(".view");
  const infoBtn = document.querySelector(".info");
  const infoRtn = document.querySelector(".info-return");
  const createRtn = document.querySelector(".create-return");
  const viewRtn = document.querySelector(".view-return");
  const frostedPanel = document.querySelector(".frosted-panel");

  navIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  });

  infoBtn.addEventListener("click", () => {
    frostedPanel.classList.toggle("open");
    frostedPanel.classList.add("info");
  });

  createBtn.addEventListener("click", () => {
    frostedPanel.classList.toggle("open");
    frostedPanel.classList.add("create");
  });

  viewBtn.addEventListener("click", () => {
    frostedPanel.classList.toggle("open");
    frostedPanel.classList.add("view");
  });

  infoRtn.addEventListener("click", () => {
    frostedPanel.classList.remove("info");
    frostedPanel.classList.toggle("open");
  });
  createRtn.addEventListener("click", () => {
    frostedPanel.classList.remove("create");
    frostedPanel.classList.toggle("open");
  });
  viewRtn.addEventListener("click", () => {
    frostedPanel.classList.remove("view");
    frostedPanel.classList.toggle("open");
  });
};

openNav();
