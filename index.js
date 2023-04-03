let $menu = document.querySelector("#menu");
let contadorDelMenu = 0;

$menu.addEventListener('click', () => {
    console.log("Apretado")
    if (contadorDelMenu === 0) {
        aparecerElMenu();
        contadorDelMenu++;
        return;
    }
    if (contadorDelMenu === 1) {
        desaparecerElMenu();
        contadorDelMenu--;
        return;
    }
})


let $barraDeNavegacion = document.querySelector(".barra-de-navegacion-principal .barra-de-navegacion__derecha")
function aparecerElMenu() {
    $barraDeNavegacion.style.display = "flex";
}
function desaparecerElMenu() {
    $barraDeNavegacion.style.display = "none";
}