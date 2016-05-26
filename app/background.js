(function() {
  'use strict';

  chrome.webNavigation.onBeforeNavigate.addListener(function(navigation) {
    if (navigation.url.indexOf("sh.st") == -1) return

    var fullUrl = navigation.url;
    var lastIndex = fullUrl.lastIndexOf("http")
    if (lastIndex > -1){
      var destinationUrl = fullUrl.substring(lastIndex)
      chrome.tabs.update(navigation.tabId, {url: destinationUrl})
    }
  });
})();