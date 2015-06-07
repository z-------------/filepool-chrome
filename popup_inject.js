var ELEMENT_ID = "FILEPOOL_UPLOADER_IFRAME";

if (!document.getElementById(ELEMENT_ID)) {
    var iframe = document.createElement("iframe");
    iframe.src = chrome.extension.getURL("popup.html");
    
    iframe.setAttribute("id", ELEMENT_ID);
    
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.top = "0";
    iframe.style.margin = "20px";
    iframe.style.borderRadius = "4px";
    iframe.style.border = "none";
    iframe.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)";
    iframe.style.zIndex = "999999";

    document.body.appendChild(iframe);
    console.log("appended iframe", iframe);
}

function closeBox() {
    var elem = document.getElementById(ELEMENT_ID);
    if (elem) {
        elem.parentElement.removeChild(elem);
        console.log("removed iframe");
    }
}

window.addEventListener("click", function(e) {
    if (document.getElementById(ELEMENT_ID) && e.path.indexOf(document.getElementById(ELEMENT_ID)) === -1) {
        closeBox();
        console.log("clicked outside box");
    }
});