let pokemon = document.getElementById("ajout");
document.addEventListener("click", pokemon);
let indexCard=0;
function add(src, width, height, alt, srcStats, isLocal) {
    const divDad = document.getElementById("divDad");
    const divImg = document.createElement('div');
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

    const nom = document.createElement("h2");
    nom.style.color = "#395BA9";
    divImg.appendChild(nom);
    nom.textContent = alt;

    const stats = document.createElement("img");
    divImg.appendChild(stats);
    stats.src = srcStats;
    stats.setAttribute("class", "pkmnstat");
    
    const suppr = document.createElement("button");
    suppr.setAttribute("type", "button");
    suppr.setAttribute("id", "buttonSuppr" + "-" + indexCard);
    suppr.setAttribute("class", "btnsuppr")
    suppr.textContent = "Relâcher";
    divImg.appendChild(suppr);
    suppr.addEventListener("click", erase);
    
    // let edit = document.createElement("input");
    // edit.setAttribute("type", "text");
    // edit.setAttribute("id", "buttonEdit" + indexCard);
    // edit.textContent = "Edit";
    // divImg.appendChild(edit);
    if (!isLocal){
        pushToLocal(indexCard, alt);
    }
    indexCard++;
}
const erase = x => {
    eraseCard(x.target.id);
}

function eraseCard(cardId) {
    const cardChoice = document.getElementById(cardId);
    const card = cardId.split("-");
    console.log(card);
    const index = card[1];
    deleteInLocal(index);
    console.log(cardId);
    cardChoice.parentNode.remove(cardChoice);
}
function pushToLocal(index, pkmnName)
{
    const data = [index, pkmnName];
    localStorage.setItem("card"+ "-"+ index, JSON.stringify(data));
}

function deleteInLocal(index)
{
    localStorage.removeItem("card"+ "-"+ index);
}
function load(){
    for (let i = 0; i < localStorage.length; i++){
        const localData = localStorage.getItem(localStorage.key(i));
        let noms = "";
        for (let y = 0; y<localData.length; y++ ){
            if (localData[y] != '[' && localData[y] != '"' && localData[y] != ']'){
                noms += localData[y];
            }
        }
        let tab = noms.split(",");
        console.log(tab[1]);
        makeChoice(tab[1])
    }
}
window.addEventListener("load", load());
function addArceus(isLocal) {
    const source = "images/arceus.png";
    const stat = "images/arceus_stats.png";
    add( source , "200", "200", "Arceus", stat, isLocal);
}
function addMewtwo(isLocal) {
    const source = "images/mewtwo.jpeg";
    const stat = "images/mewtwo_stats.png";
    add( source , "200", "200", "Mewtwo", stat, isLocal); 
}
function addRegigigas(isLocal) {
    const source = "images/regigigas.jpeg";
    const stat = "images/regigigas_stats.png";
    add( source , "200", "200", "Regigigas", stat, isLocal); 
}
function addGiratina(isLocal) {
    const source = "images/giratina.jpeg";
    const stat = "images/giratina_stats.png";
    add( source , "200", "200", "Giratina", stat, isLocal); 
}
function addRayquaza(isLocal) {
    const source = "images/rayquaza.jpeg";
    const stat = "images/rayquaza_stats.png";
    add( source , "200", "200", "Rayquaza", stat, isLocal);
}
function addLugia(isLocal) {
    const source = "images/lugia.jpeg";
    const stat = "images/lugia_stats.png";
    add( source , "200", "200", "Lugia", stat, isLocal); 
}
function makeChoice(localNom = null) {
    const select = document.getElementById('ajout');
    let isLocal = false;
    let value = null;
    if (localNom == null){
        value = select.options[select.selectedIndex].value;
    }else {
        value = localNom;
        isLocal = true;
    }
    if (value === "Arceus") {
        addArceus(isLocal)   
    }   else if (value === "Mewtwo") {
            addMewtwo(isLocal)
    }   else if (value === "Regigigas") {
            addRegigigas(isLocal)
    }   else if (value === "Giratina") {
            addGiratina(isLocal)
    }   else if (value === "Rayquaza") {
            addRayquaza(isLocal)
    }   else if (value === "Lugia") {
            addLugia(isLocal)
    }
}
function getUserMedia(constraints) {
    if (navigator.mediaDevices) {
      return navigator.mediaDevices.getUserMedia(constraints);
    }
      
    const legacyApi = navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia || navigator.msGetUserMedia;
      
    if (legacyApi) {
      return new Promise(function (resolve, reject) {
        legacyApi.bind(navigator)(constraints, resolve, reject);
      });
    }
}
  
function getStream (type) {
    const vid = document.getElementById("vid");
    if (!navigator.mediaDevices && !navigator.getUserMedia && !navigator.webkitGetUserMedia &&
      !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
      alert('User Media API not supported.');
      return;
    }
    vid.style.display = "block";
    const constraints = {};
    constraints[type] = true;
    
    getUserMedia(constraints)
      .then(function (stream) {
        const mediaControl = document.querySelector(type);
        
        if ('srcObject' in mediaControl) {
          mediaControl.srcObject = stream;
        } else if (navigator.mozGetUserMedia) {
          mediaControl.mozSrcObject = stream;
        } else {
          mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
        }
        
        mediaControl.play();
      })
      .catch(function (err) {
        alert('Error: ' + err);
      })
    }
    document.getElementById('result').innerHTML = navigator.deviceMemory || '8'