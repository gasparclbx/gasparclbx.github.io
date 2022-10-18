let pokemon = document.getElementById("ajout");
document.addEventListener("click", pokemon);
let indexCard=0;
function add(src, width, height, alt, srcStats) {
    let divDad = document.getElementById("divDad");
    let divImg = document.createElement('div');
    divDad.appendChild(divImg);
    const img = document.createElement("img");

    img.src = src;
    img.height = height;
    img.width = width;
    img.alt = alt;
    img.style.margin = "20px";
    img.style.border = '2px black solid';
    img.style.borderRadius = "5px";

    divImg.setAttribute("class", "pkmncard");
    divImg.appendChild(img);

    let nom = document.createElement("h2");
    nom.style.color = "#395BA9";
    divImg.appendChild(nom);
    nom.textContent = alt;

    let stats = document.createElement("img");
    divImg.appendChild(stats);
    stats.src = srcStats;
    stats.setAttribute("class", "pkmnstat");
    
    let suppr = document.createElement("button");
    suppr.setAttribute("type", "button");
    suppr.setAttribute("id", "buttonSuppr" + "-" + indexCard);
    suppr.textContent = "Exit";
    divImg.appendChild(suppr);
    suppr.addEventListener("click", supprime);
    indexCard++;

    let edit = document.createElement("input");
    edit.setAttribute("type", "text");
    edit.setAttribute("id", "buttonEdit" + indexCard);
    edit.textContent = "Edit";
    divImg.appendChild(edit);
    pushToLocal(indexCard, alt);
}
const supprime = x => {
    eraseCard(x.target.id);
}
function eraseCard(cardId) {
    let cardChoice = document.getElementById(cardId);
    let carte = cardId.split("-");
    let index = carte[1];
    deleteInLocal(index);
    cardChoice.parentNode.remove(cardChoice);
}
function pushToLocal(index, pkmnName)
{
    let data = [index, pkmnName];
    localStorage.setItem("card"+ "-"+ index, JSON.stringify(data));
}

function deleteInLocal(index)
{
    localStorage.removeItem("card"+ "-"+ index);
}
function add_arceus() {
    let source = "images/arceus.png";
    let stat = "images/arceus_stats.png";
    add( source , "200", "200", "Arceus", stat);
}
function add_mewtwo() {
    let source = "images/mewtwo.jpeg";
    let stat = "images/mewtwo_stats.png";
    add( source , "200", "200", "Mewtwo", stat); 
}
function add_regigigas() {
    let source = "images/regigigas.jpeg";
    let stat = "images/regigigas_stats.png";
    add( source , "200", "200", "Regigigas", stat); 
}
function add_giratina() {
    let source = "images/giratina.jpeg";
    let stat = "images/giratina_stats.png";
    add( source , "200", "200", "Giratina", stat); 
}
function add_rayquaza() {
    let source = "images/rayquaza.jpeg";
    let stat = "images/rayquaza_stats.png";
    add( source , "200", "200", "Rayquaza", stat);
}
function add_lugia() {
    let source = "images/lugia.jpeg";
    let stat = "images/lugia_stats.png";
    add( source , "200", "200", "Lugia", stat); 
}
function makeChoice() {
    let select = document.getElementById('ajout');
    let value = select.options[select.selectedIndex].value;
    if (value == "first") {
        add_arceus()   
    }   else if (value == "second") {
            add_mewtwo()
    }   else if (value == "third") {
            add_regigigas()
    }   else if (value == "fourth") {
            add_giratina()
    }   else if (value == "fifth") {
            add_rayquaza()
    }   else if (value == "sixth") {
            add_lugia()
    }
}
