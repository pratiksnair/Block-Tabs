// This script assumes you have a file 'beep.ogg' in the 'assets' directory of your extension

const sound = new Audio(browser.runtime.getURL("assets/beep.ogg"));

// Function to handle tab creation
function handleTabCreation(tab) {
    // Get the list of all tabs in the current window
    browser.tabs.query({ currentWindow: true }).then(tabs => {
        // If there's more than one tab, close the newly created tab
        if (tabs.length > 1) {
            browser.tabs.remove(tab.id).then(() => {
                // Play sound to notify the user
                sound.play();
            });
        }
    });
}

// Add a listener for when a new tab is created
browser.tabs.onCreated.addListener(handleTabCreation);

// Optionally, you can also handle cases where tabs are restored
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        browser.tabs.sendMessage(tabId, { action: 'checkPasswordField' });
    }
});
