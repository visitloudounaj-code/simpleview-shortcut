chrome.commands.onCommand.addListener((command) => {
  if (command === "insert-link") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          const linkBtn = document.querySelector('.cke_button__linklookup_button');
          if (linkBtn) {
            linkBtn.click();
            const interval = setInterval(() => {
              const browseBtn = document.querySelector('a[title="Browse"].cke_dialog_ui_button');
              if (browseBtn) {
                clearInterval(interval);
                browseBtn.click();
              }
            }, 100);
            setTimeout(() => clearInterval(interval), 5000);
          }
        }
      });
    });
  }

  if (command === "insert-image") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          const imageBtn = document.querySelector('.cke_button__image');
          if (imageBtn) {
            imageBtn.click();
            const interval = setInterval(() => {
              const browseBtn = document.querySelector('a[title="Browse Server"].cke_dialog_ui_button');
              if (browseBtn) {
                clearInterval(interval);
                browseBtn.click();
              }
            }, 100);
            setTimeout(() => clearInterval(interval), 5000);
          }
        }
      });
    });
  }
});
