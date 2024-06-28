function trocar() {
    const html = document.documentElement;
    html.classList.toggle("light")
}

function trocar2() {
    const html = document.documentElement;

    if (html.classList.contains("light")) {
        html.classList.remove("light")
    } else {
        html.classList.add("light")
    }

}