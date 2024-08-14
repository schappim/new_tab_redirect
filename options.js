document.addEventListener('DOMContentLoaded', function() {
  const urlInput = document.getElementById('redirectUrl');
  const saveButton = document.getElementById('save');
  const status = document.getElementById('status');

  // Load current URL
  chrome.storage.sync.get('redirectUrl', function(data) {
    urlInput.value = data.redirectUrl || 'https://google.com';
  });

  // Save URL
  saveButton.addEventListener('click', function() {
    const newUrl = urlInput.value;
    chrome.storage.sync.set({redirectUrl: newUrl}, function() {
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 2000);
    });
  });
});
