// Localiza o botao que abre e recolhe o menu lateral em todas as paginas.
const sidebarToggle = document.querySelector("#sidebar-toggle");
// Alterna o estado visual e mantem os atributos de acessibilidade sincronizados.
sidebarToggle.addEventListener("click", function () {
    // A classe no body permite que o CSS altere toda a grade da pagina.
    const sidebarCollapsed = document.body.classList.toggle(
        "sidebar-collapsed"
    );

    // Informa a leitores de tela se o menu controlado pelo botao esta aberto.
    sidebarToggle.setAttribute(
        "aria-expanded",
        String(!sidebarCollapsed)
    );

    // Atualiza o nome da acao para descrever o que o proximo clique fara.
    sidebarToggle.setAttribute(
        "aria-label",
        sidebarCollapsed
            ? "Expandir menu"
            : "Recolher menu"
    );

    // Reserva o estado no navegador para uma futura restauracao da preferencia.
    localStorage.setItem('SidebarCollapsed', true);
});
