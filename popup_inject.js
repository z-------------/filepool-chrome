var iframe = document.createElement("iframe");
iframe.src = chrome.extension.getURL("popup.html");

iframe.style.position = "fixed";
iframe.style.right = "0";
iframe.style.top = "0";
iframe.style.margin = "20px";
iframe.style.borderRadius = "4px";
iframe.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)";

document.body.appendChild(iframe);
console.log("appended iframe", iframe);