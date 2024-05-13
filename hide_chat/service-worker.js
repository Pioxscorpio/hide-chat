chrome.action.onClicked.addListener(async (tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      pane = document.querySelector('#pane-side');
      if (pane.style.webkitFilter !== "blur(15px)") {
        pane.style.webkitFilter = "blur(15px)";
      } else {
        pane.style.webkitFilter = "none";
      }
    }
  });
});
