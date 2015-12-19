"use strict";

var Grinder = function() {
      
};

Grinder.prototype.grind = function() {
    console.log('grind');
};

Grinder.prototype.dispose = function() {
   console.log('Disposing Grinder'); 
};

module.exports = Grinder;
