function showDropdown(dropdownMenu) {
  if (dropdownMenu.classList.contains("show")) {
    dropdownMenu.classList.remove("show");
  } else {
    dropdownMenu.classList.add("show");
  }
}

function eventAdder(toggleBtn, dropdownMenu) {
  toggleBtn.addEventListener("click", () => {
    showDropdown(dropdownMenu);
  });
}
const toggleBtns = document.querySelectorAll(".dropdown-toggle");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");

for (let i = 0; i < toggleBtns.length; i++) {
  eventAdder(toggleBtns[i], dropdownMenus[i]);
}

document.addEventListener("mouseup", function (e) {
  if (
    e.target.classList[0] !== "dropdown-menu" &&
    e.target.classList[0] !== "dropdown-toggle"
  ) {
    for (let i = 0; i < toggleBtns.length; i++) {
      dropdownMenus[i].classList.remove("show");
    }
  }
});
// Side Menu
const menu = document.querySelector(".nav-bar");

function showMenu() {
  menu.classList.toggle("menu-show");
  document.querySelector(".overlay").classList.toggle("fade");
}

const menuBtns = [
  document.querySelector(".menu-btn"),
  document.querySelector(".close-btn"),
];
for (let i = 0; i < menuBtns.length; i++) {
  menuBtns[i].addEventListener("click", () => {
    showMenu();
  });
}
