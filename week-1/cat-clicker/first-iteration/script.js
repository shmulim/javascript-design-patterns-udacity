;(function(){
    'use strict';
    
    var cat = document.getElementById('cat');
    var counter = document.getElementById('counter');
    var count = 0;

    cat.addEventListener('click', function () {
        counter.innerHTML = count++;
    }, false);

})();
