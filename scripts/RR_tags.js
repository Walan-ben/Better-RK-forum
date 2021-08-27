// Emplacement des boutons et de la zone de rédaction
const placeBtn = ".helpline";
const placeTxtArea = "textarea.post";

// Icones
const iconStrike = browser.runtime.getURL("images/strikethrough.png");
const iconCenter = browser.runtime.getURL("images/align-center.png");
const iconRight = browser.runtime.getURL("images/align-right.png");
const iconSpoiler = browser.runtime.getURL("images/spoiler.png");
const iconSup = browser.runtime.getURL("images/superscript.png");
const iconSub = browser.runtime.getURL("images/subscript.png");
const iconRule = browser.runtime.getURL("images/horizontal-rule.png");
const iconDash = browser.runtime.getURL("images/horizontal-dash.png");
const iconDot = browser.runtime.getURL("images/horizontal-dot.png");
const iconChar = browser.runtime.getURL("images/ui_icone_fichePerso.png");

// Définition des boutons à ajouter (texte alternatif, aide, image à afficher)
const newBtns = [{
    name: "strike", 
    help: "Texte barré : [strike]texte[/strike]", 
    type: "image", 
    src: iconStrike
  },
  {
    name: "center", 
    help: "Texte centré : [center]texte à centrer[/center]", 
    type: "image", 
    src: iconCenter
  },
	{
    name: "right", 
    help: "Texté aligné à droite : [right]texte à aligner[/right]", 
    type: "image", 
    src: iconRight
  },
  {
    name: "spoiler", 
    help: "Texte à cacher : [spoiler]Texte caché[/spoiler]", 
    type: "image", 
    src: iconSpoiler
  },
  {
    name: "sup", 
    help: "Texte à mettre en exposant : [sup]Exposant[/sup]", 
    type: "image", 
    src: iconSup
  },
  {
    name: "sub", 
    help: "Texte à mettre en indice : [sub]Indice[/sub]", 
    type: "image", 
    src: iconSub
  },
  {
    name: "char", 
    help: "Insérer la fiche d'un joueur : [char]Nom IG[/char]", 
    type: "image", 
    src: iconChar
  },
  {
    name:"hr",
    help:"Barre de séparation pleine : [ħr] ou [hr={Nombre compris entre 1 et 99}]",
    type: "image", 
    src: iconRule
  },
  {
    name:"hr-dashed",
    help:"Barre de séparation en tirets : [hr-dashed] ou [hr-dashed={Nombre compris entre 1 et 99}]",
    type: "image", 
    src: iconDash
  },
  {
    name:"hr-dotted",
    help:"Barre de séparation en pointillés : [hr-dotted] ou [hr-dotted={Nombre compris entre 1 et 99}]",
    type: "image", 
    src: iconDot
  }
];

// Affhicage de l'aide au survol
function displayHelp(ref) {
    let loc = document.querySelector(placeBtn);
    loc.value = ref.help;
}

// Fonction de création et paramètrage d'un nouveau bouton
function createBtn(ref, loc) {
  let newTd = document.createElement("td");
  newTd.style = "text-align: center;";

  let newSpan = document.createElement("span");
  newSpan.className = "genmed";

  let newBtn = document.createElement("input");
  newBtn.className = "button";
  newBtn.type = ref.type;
  newBtn.src = ref.src;
  newBtn.alt = ref.name;
  newBtn.height = "16";
  newBtn.style = "padding: 0 7px; border-style: outset; border-width: 2px;";

  newBtn.onclick=function(e) {
    e.preventDefault();
    insertTag(ref);
  };

  newBtn.onmouseover=function() {
    displayHelp(ref);
  };
  
  newSpan.appendChild(newBtn);
  newTd.appendChild(newSpan);
  loc.appendChild(newTd);
}

// Ajout de tag dans la zone de rédaction
function insertTag(e) {
  let openTag = "[" + e.name + "]";
  let closeTag = "[/" + e.name + "]";
  let locTxtArea = document.querySelector(placeTxtArea);
  //let savedPos = locTxtArea.scrollTop;
  let selectionInter, selectionStart, selectionEnd;
  selectionStart = locTxtArea.value.substring(0, locTxtArea.selectionStart);
  selectionInter = locTxtArea.value.substring(locTxtArea.selectionStart, locTxtArea.selectionEnd);
  selectionEnd = locTxtArea.value.substring(locTxtArea.selectionEnd);
  locTxtArea.value = selectionStart + openTag + selectionInter + closeTag + selectionEnd; 
  locTxtArea.focus(); 
  locTxtArea.setSelectionRange(selectionStart.length + openTag.length, selectionStart.length + openTag.length + selectionInter.length);
  //locTxtArea.scrollTop = savedPos;
}

// Ajout des boutons
let newTr = document.createElement("tr");
let loc = document.querySelector(placeBtn);
loc = loc.parentNode.parentNode.parentNode.previousElementSibling;
loc.parentNode.insertBefore(newTr, loc);
for(let t in newBtns) {
  createBtn(newBtns[t], newTr);
}