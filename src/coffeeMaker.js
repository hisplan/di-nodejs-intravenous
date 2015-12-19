"use strict";

var CoffeeMaker = function(grinder, heater, pump, model) {
    this.grinder = grinder;
    this.heater = heater;
    this.pump = pump;
    this.model = model;
};

CoffeeMaker.prototype.brew = function() {
  console.log('model name: %s', this.model);
  
  var isGrindDone = this.grinder.grind();
  var isPumpDone = this.pump.pump();
  var isHeaterOn = this.heater.on();
  
  // true indicating everything is successful
  return isGrindDone && isPumpDone && isHeaterOn;
};

CoffeeMaker.prototype.dispose = function() {
   console.log('Disposing CoffeeMaker'); 
};

CoffeeMaker.$inject = ['Grinder', 'Heater', 'Pump'];
module.exports = CoffeeMaker;
