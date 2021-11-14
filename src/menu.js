export{makeMenu};


function makeMenu() {

    var fragment = new DocumentFragment();
    const div1 = document.createElement("div");
    fragment.appendChild(div1);

    let h2 = document.createElement("h2");
    h2.textContent = "NUESTRA CARTA";
    div1.appendChild(h2);

    let p = document.createElement("p");
    p.textContent = "Desde este QR puedes descargar nuestra carta completa"
    div1.appendChild(p);

    let carta = document.createElement("img");
    carta.setAttribute("src", "../src/img/BAR-MORILES-CODIGO-QR.jpg");
    div1.appendChild(carta);

    anexaPage(fragment)
}
function anexaPage(f) {
    if (document.querySelector("#cuerpo")) { document.querySelector("#content").removeChild(document.querySelector("#cuerpo")) }
    var cuerpo = document.createElement("div")
    cuerpo.setAttribute("id", "cuerpo");

    document.querySelector("#content").appendChild(cuerpo);
    document.querySelector("#cuerpo").appendChild(f);
}