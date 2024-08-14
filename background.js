chrome.tabs.onCreated.addListener((tab) => {
  if (tab.pendingUrl === "chrome://newtab/" || tab.url === "chrome://newtab/") {
    chrome.storage.sync.get('redirectUrl', function(data) {
      const url = data.redirectUrl || 'https://google.com';
      chrome.tabs.update(tab.id, { url: url });
    });
  }
});

// Set default URL if not already set
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get('redirectUrl', function(data) {
    if (!data.redirectUrl) {
      chrome.storage.sync.set({redirectUrl: 'https://google.com'});
    }
  });
});
