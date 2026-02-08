const childPhoto = document.getElementById("child-photo");
const adultPhoto = document.getElementById("adult-photo");
const flipButton = document.getElementById("flip-button");

flipButton.addEventListener("click", () => {
  if (adultPhoto.style.display === "none") {
    adultPhoto.style.display = "block";
    childPhoto.style.display = "none";
    flipButton.textContent = "Назад в детство";
  } else {
    adultPhoto.style.display = "none";
    childPhoto.style.display = "block";
    flipButton.textContent = "Нажми что бы выросла";
  }
});

const menuButton = document.querySelector(".menu-button");
const sideMenu = document.querySelector(".side-menu");
let open = false;

menuButton.addEventListener("click", () => {
  if (!open) {
    sideMenu.style.display = "flex"; // включаем меню
    setTimeout(() => {
      sideMenu.style.width = "500px";
    }, 10); // плавное раскрытие
    open = true;
  } else {
    sideMenu.style.width = "0"; // плавное закрытие
    setTimeout(() => {
      sideMenu.style.display = "none";
    }, 500); // после анимации скрываем
    open = false;
  }
});
