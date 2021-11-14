export{makeContact   }
function makeContact() {
    

    var fragment = new DocumentFragment();
    const div1 = document.createElement("div");
    fragment.appendChild(div1);

    let h2 = document.createElement("h2");
    h2.textContent = "DONDE ENCONTRARNOS";
    div1.appendChild(h2);

    let p = document.createElement("p");
    p.textContent = "Podras visitarnos en Cordoba ,calle Bender the ofender n 45"
    div1.appendChild(p);

    anexaPage(fragment)

}function anexaPage(f) {
    if (document.querySelector("#cuerpo")) { document.querySelector("#content").removeChild(document.querySelector("#cuerpo")) }
    var cuerpo = document.createElement("div")
    cuerpo.setAttribute("id", "cuerpo");

    document.querySelector("#content").appendChild(cuerpo);
    document.querySelector("#cuerpo").appendChild(f);
}