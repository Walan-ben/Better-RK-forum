let prefix = "";

//--------------------------------------------
// Récupération styles existants
let rows = document.querySelector('.row1');
let styleRows = getComputedStyle(rows);
let links = document.querySelector('a.nav');
let styleLinks = getComputedStyle(links);

// Emplacements et styles des boutons/zones de texte
let placeBtn = document.querySelector('.nav:first-child');
	let tr = document.createElement("tr");
	tr.display = "block";
	let td = document.createElement("td");
	td.align = "left";
	td.vAlign = "bottom";
	td.colSpan = "2";
	placeBtn = placeBtn.parentNode.parentNode.parentNode.appendChild(tr).appendChild(td);

let tr2 = document.createElement("tr");
let placeTxtArea = placeBtn.parentNode.parentNode.appendChild(tr2);

//--------------------------------------------
// Fonctions création textareas
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
    txtarea.placeholder = label + "  \n - à remplir, séparer les noms par des ; \n - la sauvegarde sera prise en compte au prochain chargement de la page";
    txtarea.value = value.join(' ;\n');
	let td = document.createElement("td");
  	td.colSpan = "2";
    td.appendChild(txt).appendChild(txtarea);
	place.appendChild(td);
}

// Fonctions filtres et annulation
function filter(array) {
	array.forEach(function(el){
		let wholeLine = el.parentNode.parentNode;
		//console.log({wholeLine});
		let msgContent = wholeLine.querySelector(".postbody");
		//console.log({msgContent});
		msgContent.parentNode.dataset.oldContent = msgContent.parentNode.innerHTML;
		msgContent.parentNode.innerHTML = '<span class = "postbody" style="color:red"><i>Better RK forum : Ce message a été retiré car son auteur fait partie de votre liste d\'ignorés.</i></span>';
  });
}

function cancelFilter(array) {
	array.forEach(function(el){
		let wholeLine = el.parentNode.parentNode;
		//console.log({wholeLine});
		let msgContent = wholeLine.querySelector(".postbody");
		msgContent.parentNode.innerHTML = msgContent.parentNode.dataset.oldContent;
  });
}

(async() => {
	let onOffIgnore = await browser.storage.local.get("onOffIgnore");
	let loadIgnore = await browser.storage.local.get("loadIgnore");
	
	if (onOffIgnore["onOffIgnore"]){
		//----------------------------------------------
		// Définition des listes blanches et noires
		let ignoreList = await importList("igSaved");
		ignoreList = ignoreList.filter(word => word.length !==0);
		let ignoreListEsc = ignoreList.map(el => escapeRegExp(el));
		let igRegex = new RegExp (ignoreListEsc.join('|'), "i"); //-- The "i" makes it case insensitive.
		if(ignoreList.length === 0){
			igFilterArray = [];
		} else {
			igFilterArray = Array.from(document.querySelectorAll(".forumline > tbody > tr > td > span.name")).filter(el => igRegex.test(el.textContent));
		}
		//console.log({igFilterArray});

		//--------------------------------------------
		// Boutons liste ignorés
		createTextarea("ignoreTextArea", "Liste d'ignorés", placeTxtArea, ignoreList);
		let igTxtArea = document.getElementById("ignoreTextArea");
			igTxtArea.style.display = "none";
		let igTxtLbl = document.getElementById("ignoreTextAreaLbl");
			igTxtLbl.style.display = "none";
		  
		createSaveBtn("saveIgnoreList", igTxtArea);
		let igSave = document.getElementById("saveIgnoreList");
			igSave.style.display = "none";
			igSave.addEventListener("click", function(e){
			e.preventDefault();
			exportList("igSaved", igTxtArea);
			//console.log(igTxtArea.value);
		});
		  
		createFilterBtn("ignoreList", "Filtrer ignorés", placeBtn);
		let igBtn = document.getElementById("ignoreList");
		igBtn.addEventListener("click", function(e){
			e.preventDefault();
			filter(igFilterArray);
		});
		  
		// Bouton annulation de filtres
		createFilterBtn("cancel", "Annuler filtre", placeBtn);
		let cancelBtn = document.getElementById("cancel");
		cancelBtn.addEventListener("click", function(e){
			e.preventDefault();
			cancelFilter(igFilterArray);
		});
		  
		// Bouton réglages
		createFilterBtn("settings", "Afficher réglages", placeBtn);
		let settingBtn = document.getElementById("settings");
		settingBtn.addEventListener("click", function(e){
			e.preventDefault();
			if (igTxtArea.style.display === "none"){
				settingBtn.textContent = "Cacher réglages";
			} else {
				settingBtn.textContent = "Afficher réglages";
			}
			toggleDiplay(igTxtArea);
			toggleDiplay(igTxtLbl);
			toggleDiplay(igSave);
		  });
		  
		// Application des filtres par défaut
		if (loadIgnore["loadIgnore"]){
			filter(igFilterArray);
		}
	}
})();