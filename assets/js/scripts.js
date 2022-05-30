function changeMode() {
    changeClasses();
    changeText();
    changeLogo();
}

function changeClasses() {
    BUTTON.classList.toggle(DARK_MODE_CLASS);
    H1.classList.toggle(DARK_MODE_CLASS);
    BODY.classList.toggle(DARK_MODE_CLASS);
    FOOTER.classList.toggle(DARK_MODE_CLASS);
}

function changeText() {
    const LIGHT_MODE = "Modo Claro";
    const DARK_MODE = "Modo Escuro"
    if (BODY.classList.contains(DARK_MODE_CLASS)) {
        BUTTON.innerHTML = LIGHT_MODE;
        H1.innerHTML = "Usando " + DARK_MODE;
        return;
    }

    BUTTON.innerHTML = DARK_MODE;
    H1.innerHTML = "Usando " + LIGHT_MODE;
}

function changeLogo() {

    if (BODY.classList.contains(DARK_MODE_CLASS)) {
       
        document.getElementById("logo").src = "assets/img/noite.gif"
        return;
    } else {
        
        document.getElementById("logo").src = "assets/img/dia.gif"
        return;
    }
}

const DARK_MODE_CLASS = "dark-mode";
const BUTTON = document.getElementById("mode-selector");
const H1 = document.getElementById("page-title");
const BODY = document.getElementsByTagName("body")[0];
const FOOTER = document.getElementsByTagName("footer")[0];
const LOGO = document.getElementsByClassName("logo");

BUTTON.addEventListener("click", changeMode)






date = new Date();
year = date.getFullYear();
document.getElementById("assinatura").innerHTML = "L U C A S &ensp; G O M E S © &ensp;" + year;
