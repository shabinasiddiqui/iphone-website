document.querySelector(".openNav").addEventListener("click", showNav);
document.querySelector(".closeNav").addEventListener("click", removeNav);

function showNav() {
  document.querySelector(".navbar").classList.add("addNav");
}

function removeNav() {
  document.querySelector(".navbar").classList.remove("addNav");
}
