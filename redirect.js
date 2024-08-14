chrome.storage.sync.get('redirectUrl', function(data) {
  const url = data.redirectUrl || 'https://google.com';
  window.location.href = url;
});
