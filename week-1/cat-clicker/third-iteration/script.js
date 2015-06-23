var app = app || {};

(function() {
  'use strict';

  window.onload = function() {

    app.CatClicker = function(name, link) {
      this.name = name || 'name';
      this.link = link || 'link';
      this.counter = 0;
      this.init = function() {
        var button = document.createElement('button');
        button.textContent = this.name;
        document.body.appendChild(button);
        button.addEventListener('click', function() {
          console.log(name);
        }, false);
      };
    };

    var cat1 = new app.CatClicker('1st cat', 'image source').init();
    var cat2 = new app.CatClicker('2nd cat', 'image source').init();
    var cat3 = new app.CatClicker('3rd cat', 'image source').init();
    var cat4 = new app.CatClicker('4th cat', 'image source').init();
    var cat5 = new app.CatClicker('5th cat', 'image source').init();

  };
})();
