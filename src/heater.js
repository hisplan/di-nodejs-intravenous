"use strict";

var Heater = function() {
    
};

Heater.prototype.on = function() {
    console.log('heater on');
    
    // true indicating heater is on
    return true;
};

Heater.prototype.off = function() {
    console.log('heater off');
    
    // true indicating heater is off
};

Heater.prototype.dispose = function() {
   console.log('Disposing Heater'); 
};

module.exports = Heater;