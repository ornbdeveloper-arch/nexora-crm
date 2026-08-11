const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click", function () {
    const sidebarCollapsed = document.body.classList.toggle(
        "sidebar-collapsed"
    );

    sidebarToggle.setAttribute(
        "aria-expanded",
        String(!sidebarCollapsed)
    );

    sidebarToggle.setAttribute(
        "aria-label",
        sidebarCollapsed
            ? "Expandir menu"
            : "Recolher menu"
    );

    localStorage.setItem('SidebarCollapsed', true);
});