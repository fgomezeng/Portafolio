const backdrop = document.getElementById("aside-backdrop");
const sidebar = document.getElementById("sidebar");
backdrop?.addEventListener("click", () => {
  sidebar?.classList.remove("aside__open");
});
