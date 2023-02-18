$(document).ready(function () {

    url = window.location.href;

    const nightModeStorage = localStorage.getItem('night')
    var element = document.body;

    if (url == "http://localhost/Portfolio_GustavoSantos/") {
        element.className = "dark-mode1"; // ativa o night mode

        var icon = document.querySelector("#mode");
        icon.className = "fa-solid fa-moon";
    }
    else {

        // caso tenha o valor no localStorage
        if (nightModeStorage) {

            element.className = "dark-mode1"; // ativa o night mode

            var icon = document.querySelector("#mode");
            icon.className = "fa-solid fa-moon";

        } else {
            element.className = "light-mode1";

            var icon = document.querySelector("#mode");
            icon.className = "fa-solid fa-sun";

        }
    }
});

function mode() {
    var element = document.body;


    if (element.className == "light-mode" || element.className == "" || element.className == "light-mode1") {

        var icon = document.querySelector(".fa-sun");
        icon.className = "fa-solid fa-moon";

        element.className = "dark-mode";
        localStorage.setItem('night', true) // salva o tema no localStorage


    } else if (element.className == "dark-mode" || element.className == "" || element.className == "dark-mode1") {

        var icon = document.querySelector(".fa-moon");
        icon.className = "fa-solid fa-sun";
        element.className = "light-mode";
        localStorage.removeItem('night')
    }
}