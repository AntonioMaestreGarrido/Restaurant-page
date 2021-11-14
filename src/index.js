
import { makeHome } from "../src/home.js";
import { makeMenu } from "../src/menu.js";
import { makeContact } from "../src/contact.js";

//import * as myModule from '../src/contact';
//import * as myModule from '../src/menu';

setListeners()
//makeHome()




function setListeners() {
    let l = document.querySelectorAll(".tab")

    l[0].addEventListener("click", makeHome)
    l[1].addEventListener("click", makeMenu)
    l[2].addEventListener("click", makeContact)
    //document.querySelectorAll(".tab").forEach(e => e.addEventListener('click',()=>{alert("OK")}))




}
function anexaPage(f) {
    if (document.querySelector("#cuerpo")) { document.querySelector("#content").removeChild(document.querySelector("#cuerpo")) }
    var cuerpo = document.createElement("div")
    cuerpo.setAttribute("id", "cuerpo");

    document.querySelector("#content").appendChild(cuerpo);
    document.querySelector("#cuerpo").appendChild(f);
}







