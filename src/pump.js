"use strict";

var Pump = function() {
    
};

Pump.prototype.pump = function() {
    console.log('pump');
    
    // true indicating pump is done
    return true;
};

Pump.prototype.dispose = function() {
   console.log('Disposing Pump'); 
};

module.exports = Pump;