"use strict";

var intravenous = require('intravenous');

// import necessary modules
var Grinder = require('./grinder');
var Heater = require('./heater');
var Pump = require('./pump');
var CoffeeMaker = require('./coffeeMaker');

// get IoC container
var container = intravenous.create({
    onDispose: function (instance, key) {
        console.log("Calling dispose method for service " + key);
        if (instance.dispose) instance.dispose();
    }
});

// register all the necessary modules.
// cons: need to register all the dependencies in advance
container.register('Grinder', Grinder);
container.register('Heater', Heater);
container.register('Pump', Pump);
container.register('CoffeeMaker', CoffeeMaker);

var coffeeMaker = container.get('CoffeeMaker', 'Samsung');

var result = coffeeMaker.brew();

console.log(result ? 'successful' : 'failed');

container.dispose();
