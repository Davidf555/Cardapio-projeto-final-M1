// Botao de dark-mode
function botaodarkmode() {
    const TOGGLE = document.getElementById("toggle");
    const THEME = window.localStorage.getItem("theme");

    if (THEME === "dark") document.body.classList.add("light");
    TOGGLE.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if (THEME === "dark") {
            window.localStorage.setItem("theme", "light");
        } else window.localStorage.setItem("theme", "dark");
    });
    // Não mexe nisso, se não o botão para de funciona
}
botaodarkmode();