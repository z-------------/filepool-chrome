chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        file: "popup_inject.js"
    });
});