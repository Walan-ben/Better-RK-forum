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

// Emplacements et styles des boutons/zones de texte
let placeBtn = document.querySelector('.nav:first-child');
let tr = document.createElement("tr");
let placeTxtArea = placeBtn.parentNode.parentNode.parentNode.parentNode.appendChild(tr);

// Sauvegarde des éléments de la table initiale
const allTr = document.querySelectorAll(".forumline > tbody > tr");

// Sauvegarde des lignes avec noms de catégories de la table initiale
const allCateg = document.getElementsByClassName("catLeft")

//--------------------------------------------
// Fonctions création boutons et textareas
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
	place.appendChild(td);
}

// Fonction pour tester si les lignes entre deux lignes sont toutes cachées (return true) ou non
function betweenRows(startElem, endElem){
  let nRowsBetween = 0;
  let nRowsHidden = 0;
  let startRow = startElem.parentNode;
  let endRow = endElem.parentNode;
  let testRow = startRow.nextElementSibling;
  while(testRow !== endRow){
    nRowsBetween += 1;
		if(testRow.style.display === "none"){
      nRowsHidden += 1;
    }
    testRow = testRow.nextElementSibling;
  }
  return nRowsBetween === nRowsHidden
}

// Fonctions filtres et annulation
function filter(array) {
  array.forEach(el => el.parentNode.parentNode.parentNode.style.display = "none");
  for(let i = 0; i < allCateg.length-1; i++){
	  if(betweenRows(allCateg[i], allCateg[i+1])){
		  allCateg[i].parentNode.style.display = "none";
	  }
	}
}

function cancelFilter() {
  allTr.forEach(el => el.style.display = '');
}

(async() => {
	let onOffWL = await browser.storage.local.get("onOffWL");
	
	if (onOffWL["onOffWL"]){
		  //----------------------------------------------
		  // Définition des listes blanches et noires
		  let whiteList = await importList("wlSaved");
		  whiteList = whiteList.filter(word => word.length !== 0);
		  let whiteListEsc = whiteList.map(el => escapeRegExp(el));
		  let wlRegex = new RegExp (whiteListEsc.join('|'), "i"); //-- The "i" makes it case insensitive.
		  let wlFilterArray = Array.from(document.querySelectorAll(".forumline > tbody > tr > td:nth-of-type(2) > span > a")).filter(el => !wlRegex.test(el.textContent));

		  let blackList = await importList("blSaved");
		  blackList = blackList.filter(word => word.length !== 0);
		  let blackListEsc = blackList.map(el => escapeRegExp(el));
		  let blRegex = new RegExp (blackListEsc.join('|'), "i"); //-- The "i" makes it case insensitive.
		  let blFilterArray = Array.from(document.querySelectorAll(".forumline > tbody > tr > td:nth-of-type(2) > span > a")).filter(el => blRegex.test(el.textContent));

		  //--------------------------------------------
		  // Boutons liste blanche
		  createTextarea("whiteTextArea", "Liste blanche", placeTxtArea, whiteList);
		  let wlTxtArea = document.getElementById("whiteTextArea");
			wlTxtArea.style.display = "none";
		  let wlTxtLbl = document.getElementById("whiteTextAreaLbl");
			wlTxtLbl.style.display = "none";
		  
		  createSaveBtn("saveWhiteList", wlTxtArea);
		  let wlSave = document.getElementById("saveWhiteList");
		  wlSave.style.display = "none";
		  wlSave.addEventListener("click", function(e){
			e.preventDefault();
			exportList("wlSaved", wlTxtArea);
			//console.log(wlTxtArea.value);
			});
		  
		  createFilterBtn("whiteList", "Filtrer liste blanche", placeBtn);
		  let wlBtn = document.getElementById("whiteList");
		  wlBtn.addEventListener("click", function(e){
			e.preventDefault();
			filter(wlFilterArray);
		  });

		  // Boutons liste noire
		  createTextarea("blackTextArea", "Liste noire", placeTxtArea, blackList);
		  let blTxtArea = document.getElementById("blackTextArea");
			blTxtArea.style.display = "none";
		  let blTxtLbl = document.getElementById("blackTextAreaLbl");
			blTxtLbl.style.display = "none";
		  
		  createSaveBtn("saveBlackList", blTxtArea);
		  let blSave = document.getElementById("saveBlackList");
		  blSave.style.display = "none";
		  blSave.addEventListener("click", function(e){
			e.preventDefault();
			exportList("blSaved", blTxtArea);
			//console.log(blTxtArea.value);
		  });

		  createFilterBtn("blackList", "Filtrer liste noire", placeBtn);
		  let blBtn = document.getElementById("blackList");
		  blBtn.addEventListener("click", function(e){
			e.preventDefault();
			filter(blFilterArray);
		  });
		  
		  // Bouton annulation de filtres
		  createFilterBtn("cancel", "Annuler filtres", placeBtn);
		  let cancelBtn = document.getElementById("cancel");
		  cancelBtn.addEventListener("click", function(e){
			e.preventDefault();
			cancelFilter()
		  });
		  
		  // Bouton réglages
		  createFilterBtn("settings", "Afficher réglages", placeBtn);
		  let settingBtn = document.getElementById("settings");
		  settingBtn.addEventListener("click", function(e){
			e.preventDefault();
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
	}

})();