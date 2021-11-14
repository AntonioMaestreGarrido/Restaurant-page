
export{makeHome};

    const makeHome = ()=>
   {


    var fragment = new DocumentFragment();
    const div1 = document.createElement("div");
    fragment.appendChild(div1);

    let h2 = document.createElement("h2");
    h2.textContent = "TAPAS BAR AND RESTAURANT";
    div1.appendChild(h2);

    let p = document.createElement("p");
    p.innerHTML = "Enjoy our always cordobancuisine at the best price  In 1964 Francisco Dorado Tozan leaves his hometown, Moriles, and moves to Cordoba where he stablishes Bar  Moriles on Antonio Maura Street in the lively neighborhood of Ciudad Jardin. 50 years later nothing is left of   that Tavernor the old house where it stood except for the determination to always be improving in order to offer every day the best service to its friends and clients. This Bar, as the managers and third generation of the founder– the Cordón brothers– like to call it, is full of history and anecdotes of many generations. Bar Moriles is a meeting point for people from Cordoba and foreigners, students and professors, architects and builders, lovers of cordobangastronomy and our delicious homemade soups, that can be enjoy here, weather in good company or quietly by yourself."

    div1.appendChild(p);


    document.querySelector("#content").appendChild(cuerpo);
    anexaPage(fragment);

}
function anexaPage(f) {
    if (document.querySelector("#cuerpo")) { document.querySelector("#content").removeChild(document.querySelector("#cuerpo")) }
    var cuerpo = document.createElement("div")
    cuerpo.setAttribute("id", "cuerpo");

    document.querySelector("#content").appendChild(cuerpo);
    document.querySelector("#cuerpo").appendChild(f);
}