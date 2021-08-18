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

//--------------------------------------------
// Fonctions création boutons et textareas
function createFilterBtn(name, label, place){
	let btn = document.createElement("button");
    btn.id = name;
    btn.textContent = label;
	btn.type = "button";
    btn.style = styleBtn;
    applyBtnStyle(btn);
	place.appendChild(btn);
}

function createSaveBtn(name, place){
	let btn = document.createElement("button");
    btn.id = name;
    btn.textContent = "Sauvegarder";
	btn.type = "button";
    applyBtnStyle(btn);
	place.parentNode.parentNode.appendChild(btn);
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
  //console.log("Import : " + prefix + key);
  let value = await browser.storage.local.get(prefix + key);
  if (Object.keys(value).length === 0){
	//value = [];
    value[prefix + key] = [];
  }
  //console.log("Import value : ", {value});
  //let array = JSON.parse(value);
  let array = value[prefix + key];
  array = array.map(i => i.trim());
  //console.log("Import array : ", {array});
  return array;
}

function exportList(key, object) {
  let content = object.value;
  //console.log("Export ", {content}, " in " + key);
  let re = /\s*;\s*/;
  let toSave = {};
  toSave[prefix + key] = content.split(re);
  //console.log("Export tosave : ", {toSave});
  //tosave = JSON.stringify(tosave);
  browser.storage.local.set(toSave);
}

// Utilitaire
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
