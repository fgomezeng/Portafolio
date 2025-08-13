const menu = document.getElementById("menu")!;
menu.addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");
  sidebar?.classList.toggle("aside__open");
});
