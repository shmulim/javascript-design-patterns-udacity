var app = app || {};

(function() {
  'use strict';
  
  // base
  app.catClicker = function(name, image) {
    this.count = 0;
    this.name = name;
    this.image = image || 'http://themify.me/demo/themes/wp-content/uploads/image-placeholder.jpg';
  };

  app.catClicker.prototype.init = function() {
    var self = this;

    // wrapper
    var container = document.createElement('div');
    container.setAttribute('class', 'container');
    container.setAttribute('id', this.name);
    document.body.appendChild(container);

    // title
    var title = document.createElement('h4');
    title.innerHTML = this.name;
    container.appendChild(title);

    // counter div setup
    var counter = document.createElement('div');
    counter.setAttribute('class', 'counter');
    counter.setAttribute('id', 'counter'+this.name);
    counter.innerHTML = this.count;
    container.appendChild(counter);

    // image
    var myImage = new Image(200, 200);
    myImage.src = this.image;
    container.appendChild(myImage);

    // click handler
    myImage.addEventListener('click', function() {
      self.increment();
    }, false);
  };
  
  // counter
  app.catClicker.prototype.increment = function() {
    var el = document.getElementById('counter'+this.name);
    el.innerHTML = ++this.count;
  };

  // create cats
  window.onload = function() {
    var cat1 = new app.catClicker('Ketzel the 1st', 'http://s.hswstatic.com/gif/whiskers-sam.jpg').init();
    var cat2 = new app.catClicker('Ketzel the 2nd').init();
    var cat3 = new app.catClicker('Ketzel the 3rd').init();
  };

})();
