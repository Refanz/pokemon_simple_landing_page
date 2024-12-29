const sidebar = document.querySelector(".sidebar");

const sidebarToggle = document.querySelector(".nav-toggle");
const sidebarClose = document.querySelector(".sidebar-close");

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

sidebarClose.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

