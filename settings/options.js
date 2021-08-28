// Saves options to chrome.storage
function save_options() {
  // OnOff
  let onOffWL = document.getElementById('settingsWhiteLists').checked;
  let onOffIgnore = document.getElementById('settingsIgnoreList').checked;
  let onOffMsgs = document.getElementById('settingsNewMsg').checked;
  let onOffTags = document.getElementById('settingsNewTags').checked;
  
  browser.storage.local.set({
	onOffWL: onOffWL,
	onOffIgnore: onOffIgnore,
	onOffMsgs: onOffMsgs,
	onOffTags: onOffTags
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
  // Use default value color = 'red' and likesColor = true.
  browser.storage.local.get({
	onOffWL: true,
	onOffIgnore: true,
	onOffMsgs: true,
	onOffTags: true
  }, function(items) {
	// OnOff
	document.getElementById('settingsWhiteLists').checked = items.onOffWL;
	document.getElementById('settingsIgnoreList').checked = items.onOffIgnore;
	document.getElementById('settingsNewMsg').checked = items.onOffMsgs;
	document.getElementById('settingsNewTags').checked = items.onOffTags;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('settingsSave').addEventListener('click',
    save_options);