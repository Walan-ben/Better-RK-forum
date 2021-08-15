//browser.storage.local.clear()

//-------------------------------------------
// Récupération du forum où on est
let prefix;
if (window.location.hostname === "forum.renaissancekingdoms.com"){
	prefix = "forum1";
    } else {
  prefix = "forum2";
}

//--------------------------------------------
// Récupération styles existants
let rows = document.querySelector('.row1');
let styleRows = getComputedStyle(rows);
let links = document.querySelector('.forumlink');
let styleLinks = getComputedStyle(links);

// Définition styles complémentaires
let styleBtn = "margin-left:5px; border-width: 1px 1px 1px 1px; border-radius: 4px; font-family: Georgia, Arial, Helvetica, sans-serif;";
let styleLbl = "display: block; margin-bottom: 5px;";

function applyBtnStyle(el){
  el.style = styleBtn;
	el.style.backgroundColor = styleRows.backgroundColor;
	el.style.color = styleLinks.color;
	el.style.fontWeight = styleLinks.fontWeight;
	el.style.fontSize = styleLinks.fontSize;
}

// Emplacements et styles des boutons/zones de texte
let placeBtn = document.querySelector('.nav:first-child');
//let Place_txtarea = document.querySelector('span.mainmenu:last-child');

// Sauvegarde des éléments de la table initiale
const allTr = document.querySelectorAll(".forumline > tbody > tr");


//--------------------------------------------
// Fonctions création boutons et textareas
function createFilterBtn(name, label, place){
  let btn = document.createElement("button");
    btn.id = name;
    btn.textContent = label;
    btn.style = styleBtn;
    applyBtnStyle(btn);
  place.appendChild(btn);
}

function createSaveBtn(name, place){
  let btn = document.createElement("button");
    btn.textContent = "Sauvegarder";
    btn.id = name;
    applyBtnStyle(btn);
	place.parentNode.parentNode.appendChild(btn);
}

function createTextarea(name, label, place, value = []){
  let txt = document.createElement("label");
  	txt.id = name + "Lbl";
    txt.for = name;
    txt.className = "mainmenu";
    txt.style = styleLbl;
    txt.textContent = label + " : ";
	let txtarea = document.createElement("textarea");
    txtarea.id = name;
    txtarea.type = "text";
    txtarea.rows = 5;
    txtarea.cols = 75;
    applyBtnStyle(txtarea);
    txtarea.placeholder = label + "  \n - à remplir, séparer les noms des forums par des ; \n - la sauvegarde sera prise en compte au prochain chargement de la page";
    txtarea.value = value.join(' ;\n');
  let td = document.createElement("td");
  td.appendChild(txt).appendChild(txtarea);
	place.parentNode.parentNode.parentNode.appendChild(td);
}

// Fonctions filtres et annulation
function filter(array) {
  console.log("Filter");
  array.forEach(el => el.parentNode.style.display = "none");
}

function cancelFilter() {
  console.log("cancel");
  allTr.forEach(el => el.style.display = '');
}

function toggleDiplay(el) {
  if (el.style.display === "none"){
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}

// Import et export données
async function importList(key) {
  console.log("Import : " + prefix + key);
  let value = await browser.storage.local.get(prefix + key);
  if (Object.keys(value).length === 0){
	value[prefix + key] = [];
  }
  console.log("Import value : ", {value});
  //let array = JSON.parse(value);
  let array = value[prefix + key];
  array = array.map(i => i.trim());
  console.log("Import array : ", {array});
	return array;
}

function exportList(key, object) {
  let content = object.value;
  console.log("Export ", {content}, " in " + key);
  let re = /\s*;\s*/;
  let toSave = {};
  toSave[prefix + key] = content.split(re);
  console.log("Export tosave : ", {toSave});
  //tosave = JSON.stringify(tosave);
  //console.log("Export tosave JSON : ", {tosave});
  browser.storage.local.set(toSave);
}

// Utilitaire
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

(async() => {
  //----------------------------------------------
  // Définition des listes blanches et noires
  let whiteList = await importList("wlSaved");
  console.log("whiteList : ", {whiteList});
  let whiteListEsc = whiteList.map(el => escapeRegExp(el));
  let wlRegex = new RegExp (whiteListEsc.join('|'), "i"); //-- The "i" makes it case insensitive.
  let wlFilterArray = Array.from(document.querySelectorAll(".forumline > tbody > tr > td:nth-of-type(2)")).filter(el => !wlRegex.test(el.textContent));

  let blackList = await importList("blSaved");
  console.log("blackList : ", {blackList});
  let blackListEsc = blackList.map(el => escapeRegExp(el));
  let blRegex = new RegExp (blackListEsc.join('|'), "i"); //-- The "i" makes it case insensitive.
  let blFilterArray = Array.from(document.querySelectorAll(".forumline > tbody > tr > td:nth-of-type(2)")).filter(el => blRegex.test(el.textContent));

  //--------------------------------------------
  // Boutons liste blanche
  createTextarea("whiteTextArea", "Liste blanche", placeBtn, whiteList);
  let wlTxtArea = document.getElementById("whiteTextArea");
    wlTxtArea.style.display = "none";
  let wlTxtLbl = document.getElementById("whiteTextAreaLbl");
    wlTxtLbl.style.display = "none";
  
  createSaveBtn("saveWhiteList", wlTxtArea);
  let wlSave = document.getElementById("saveWhiteList");
  wlSave.style.display = "none";
  wlSave.addEventListener("click", function(){
  	exportList("wlSaved", wlTxtArea);
    //console.log(wlTxtArea.value);
	});
  
  createFilterBtn("whiteList", "Filtrer liste blanche", placeBtn);
  let wlBtn = document.getElementById("whiteList");
  wlBtn.addEventListener("click", function(){
    filter(wlFilterArray);
  });

  // Boutons liste noire
  createTextarea("blackTextArea", "Liste noire", placeBtn, blackList);
  let blTxtArea = document.getElementById("blackTextArea");
    blTxtArea.style.display = "none";
  let blTxtLbl = document.getElementById("blackTextAreaLbl");
    blTxtLbl.style.display = "none";
  
  createSaveBtn("saveBlackList", blTxtArea);
  let blSave = document.getElementById("saveBlackList");
  blSave.style.display = "none";
  blSave.addEventListener("click", function(){
  	exportList("blSaved", blTxtArea);
    //console.log(blTxtArea.value);
	});

  createFilterBtn("blackList", "Filtrer liste noire", placeBtn);
  let blBtn = document.getElementById("blackList");
  blBtn.addEventListener("click", function(){
    filter(blFilterArray);
  });
  
  // Bouton annulation de filtres
  createFilterBtn("cancel", "Annuler filtres", placeBtn);
  let cancelBtn = document.getElementById("cancel");
  cancelBtn.addEventListener("click", cancelFilter);
  
  // Bouton réglages
  createFilterBtn("settings", "Afficher réglages", placeBtn);
  let settingBtn = document.getElementById("settings");
  settingBtn.addEventListener("click", function(){
    if (wlTxtArea.style.display === "none"){
      settingBtn.textContent = "Cacher réglages";
    } else {
      settingBtn.textContent = "Afficher réglages";
    }
    toggleDiplay(wlTxtArea);
    toggleDiplay(wlTxtLbl);
    toggleDiplay(wlSave);
    toggleDiplay(blTxtArea);
    toggleDiplay(blTxtLbl);
    toggleDiplay(blSave);
  });

})();


// A faire : permettre la même chose sur l'affichage des catégories sur l'index du forum
