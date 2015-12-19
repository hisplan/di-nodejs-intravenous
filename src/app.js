"use strict";

// cons: need to register all the dependencies in advance
var intravenous = require('intravenous');
var grinder = require('./grinder');
var heater = require('./heater');
var pump = require('./pump');
var coffeeMaker = require('./coffeeMaker');

var container = intravenous.create({
    onDispose: function (instance, key) {
        console.log("Calling dispose method for service " + key);
        if (instance.dispose) instance.dispose();
    }
});

container.register('grinder', grinder);
container.register('heater', heater);
container.register('pump', pump);
container.register('coffeeMaker', coffeeMaker);

var myCoffeeMaker = container.get('coffeeMaker', 'Samsung');

myCoffeeMaker.brew();

container.dispose();
