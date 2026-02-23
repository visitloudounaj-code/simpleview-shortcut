chrome.commands.onCommand.addListener((command) => {
  if (command === "insert-link") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          // Step 1: Click the link button to open the dialog
          const linkBtn = document.querySelector('.cke_button__linklookup_button');
          if (linkBtn) {
            linkBtn.click();

            // Step 2: Wait for the dialog to appear, then click Browse
            const interval = setInterval(() => {
              const browseBtn = document.querySelector('a[title="Browse"].cke_dialog_ui_button');
              if (browseBtn) {
                clearInterval(interval);
                browseBtn.click();
              }
            }, 100);

            // Stop trying after 5 seconds if dialog never appears
            setTimeout(() => clearInterval(interval), 5000);
          }
        }
      });
    });
  }
});
