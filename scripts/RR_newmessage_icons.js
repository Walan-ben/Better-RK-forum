//--------------------------------------------
// Lien vers icônes de nouveaux messages
//const iconNewRR = "http://forum.renaissancekingdoms.com/templates/newRR/images/folder_new_hot.gif";
//const iconBoulasse = "http://forum2.renaissancekingdoms.com/templates/boulasse/images/folder_new_hot.gif";
const iconBRKf = browser.runtime.getURL("images/new_message.png");

// Liste des lignes de forums (hors noms de catégories)
let listLines = Array.from(document.querySelector(".forumline").querySelectorAll("tbody > tr"));
listLines = listLines.filter(el => el.querySelector(".row1"));
//console.log({listLines});


//--------------------------------------------
// Récupération de la date de dernière visite indiquée par le forum
function getLastVisit() {
  let lastCol = document.querySelector("td#tdBody.bodyline > table > tbody > tr > td > span.gensmall");
  let lastVisit = lastCol.innerText.split("\n")[0].split("le")[1].trim();
  return lastVisit;
}

// Extraction du texte de la date et heure pour une ligne donnée
function getDateHour(el) {
  let lastCol = el.querySelector("td:nth-of-type(5) > span");
  return lastCol.innerText.split("\n")[0];
}

//--------------------------------------------
// Extraction de l'image pour une ligne donnée
function getImg(el){
  let imgLoc = el.querySelector("td:nth-of-type(1) > img");
  return imgLoc;
}

// Remplacement de l'image si date antérieure
function replaceImg(el, date){
  let lastMsgDate = getDateHour(el);
  if (lastMsgDate === "Pas de Messages"){
	  lastMsgDate = "01 Jan 1980 12:00";
  }
  lastMsgDate = parseFrenchDate(lastMsgDate);
  //console.log({lastMsgDate});
  if (date - lastMsgDate < 0){
    let imgMsg = getImg(el);
    imgMsg.src = iconBRKf;
    imgMsg.alt = "Nouveaux messages";
    imgMsg.title = "Nouveaux messages";
    imgMsg.removeAttribute("width");
  }
}

// Remplacement de toutes les images avec nouveaux messages
function replaceImgAll(listLines, lastVisit){
	listLines.forEach(el => replaceImg(el, lastVisit));
	return false;
}

// Application
(async() => {
	let onOffMsgs = await browser.storage.local.get("onOffMsgs");
	
	if (onOffMsgs["onOffMsgs"]){
		let lastVisit = parseFrenchDate(getLastVisit());
		//console.log({lastVisit});
		replaceImgAll(listLines, lastVisit);
	}
})();
