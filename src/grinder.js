"use strict";

var Grinder = function() {
      
};

Grinder.prototype.grind = function() {
    console.log('grind');
    
    // true indicating grind is successful
    return true;
};

Grinder.prototype.dispose = function() {
   console.log('Disposing Grinder'); 
};

module.exports = Grinder;
