(function(window) {
  var html = document.documentElement,
    isSupported = null;

  function checkSupport(fn) {
    var WebP = new Image;
    WebP.onload = WebP.onerror = function() {
      isSupported = WebP.height === 2;
      if (!isSupported) {
        if (html.className.indexOf("webp") >= 0) html.className = html.className.replace(/\bwebp\b/, "no-webp");
      }
    };
    WebP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
  }
  checkSupport()
})(window);
