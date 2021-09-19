// Saves options to chrome.storage
function save_options() {
  // OnOff
  let onOffWL = document.getElementById('settingsWhiteLists').checked;
  let onOffIgnore = document.getElementById('settingsIgnoreList').checked;
  let onOffMsgs = document.getElementById('settingsNewMsg').checked;
  let onOffTags = document.getElementById('settingsNewTags').checked;
  
  // Load
  let loadWL = document.getElementById('settingsLoadWhite').checked; 
  let loadBL = document.getElementById('settingsLoadBlack').checked; 
  let loadIgnore = document.getElementById('settingsLoadIgnore').checked; 
  
  chrome.storage.local.set({
	onOffWL: onOffWL,
	onOffIgnore: onOffIgnore,
	onOffMsgs: onOffMsgs,
	onOffTags: onOffTags,
	loadWL: loadWL,
	loadBL: loadBL,
	loadIgnore: loadIgnore
  }, function() {
    // Update status to let user know options were saved.
    let status = document.getElementById('status');
    status.textContent = 'Options enregistrées.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value
  chrome.storage.local.get({
	onOffWL: true,
	onOffIgnore: true,
	onOffMsgs: true,
	onOffTags: true,
	loadWL: false,
	loadBL: false,
	loadIgnore: false	
  }, function(items) {
	// OnOff
	document.getElementById('settingsWhiteLists').checked = items.onOffWL;
	document.getElementById('settingsIgnoreList').checked = items.onOffIgnore;
	document.getElementById('settingsNewMsg').checked = items.onOffMsgs;
	document.getElementById('settingsNewTags').checked = items.onOffTags;
	// Loads
	document.getElementById('settingsLoadWhite').checked = items.loadWL;
	document.getElementById('settingsLoadBlack').checked = items.loadBL;
	document.getElementById('settingsLoadIgnore').checked = items.loadIgnore;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('settingsSave').addEventListener('click',
    save_options);