"use strict";

var Heater = function() {
    
};

Heater.prototype.on = function() {
    console.log('heater on');
};

Heater.prototype.off = function() {
    console.log('heater off');
};

Heater.prototype.dispose = function() {
   console.log('Disposing Heater'); 
};

module.exports = Heater;