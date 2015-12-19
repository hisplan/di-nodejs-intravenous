"use strict";

var Pump = function() {
    
};

Pump.prototype.pump = function() {
    console.log('pump');
};

Pump.prototype.dispose = function() {
   console.log('Disposing Pump'); 
};

module.exports = Pump;