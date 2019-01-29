(function() {
  'use strict';

  var beforeNavigateCallback = function(navigation) {
    if (!urlMatch(navigation.url)) return

    var fullUrl = navigation.url;
    var lastIndex = fullUrl.lastIndexOf("http")
    if (lastIndex > -1){
      var destinationUrl = fullUrl.substring(lastIndex)
      chrome.tabs.update(navigation.tabId, {url: destinationUrl})
    }
  }

  var urlMatch = function(url) {
    const urls = ['sh.st', 'seku.pw']
    for (var i = 0; i < urls.length; i++) {
      if (url.indexOf(urls[i]) != -1) return true;
    }

    return false;
  }
  chrome.webNavigation.onBeforeNavigate.addListener(beforeNavigateCallback);
})();