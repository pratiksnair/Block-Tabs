document.addEventListener('keydown',function(event){
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.Key === 'I'))
    {
        console.log('Developer tools are restricted Sir');
        event.preventDefault();
        event.stopImmediatePropagation();
        alert('Iraje Policy Restrictions');
    }
});

// Function to disable right-click and show alert
function disableRightClick() {
    // Create an event listener function
    function onContextMenu(event) {
        event.preventDefault(); // Prevent the default context menu from appearing
        alert("Right-clicking is restricted on this page as per Iraje Policy.");
    }
    
    // Add the event listener to disable right-click
    document.addEventListener('contextmenu', onContextMenu);
    
    // Return the event listener function for later removal
    return onContextMenu;
}

// Function to enable right-click after a delay
function enableRightClickAfterDelay(onContextMenu) {
    setTimeout(() => {
        document.removeEventListener('contextmenu', onContextMenu);
        console.log("Right-click re-enabled.");
    }, 60000); // 5 minutes in milliseconds 300000 rakh diyo for 5 minutes, currently set for 
}

// Function to check for password fields and disable right-click
function checkForPasswordField() {
    const passwordField = document.querySelector('input[type="password"]');
    if (passwordField) {
        // Disable right-click and get the event listener function
        const onContextMenu = disableRightClick();
        // Schedule the right-click re-enable after a delay
        enableRightClickAfterDelay(onContextMenu);
    }
}

// Listen for messages from the background script
browser.runtime.onMessage.addListener((message) => {
    if (message.action === 'checkPasswordField') {
        checkForPasswordField();
    }
});

// Run check when the script is first loaded
checkForPasswordField();
