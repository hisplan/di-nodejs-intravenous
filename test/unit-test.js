"use strict";

// dependency injection
var intravenous = require('intravenous');

// unit-test
var sinon = require('sinon');
var chai = require('chai');
var should = chai.should();

// user-defined moudles
var Grinder = require('../src/grinder');
var Heater = require('../src/heater');
var Pump = require('../src/pump');
var CoffeeMaker = require('../src/coffeeMaker');


describe('cofeeMaker', function () {

    var container = intravenous.create();

    it('should call grind', function () {

        var grinder = new Grinder();

        var spy = sinon.spy(grinder, "grind");

        container.register('Grinder', grinder);
        container.register('Heater', Heater);
        container.register('Pump', Pump);
        container.register('CoffeeMaker', CoffeeMaker);

        var coffeeMaker = container.get('CoffeeMaker', 'Samsung');

        coffeeMaker.brew();

        spy.called.should.be.true;

    });

    it('should turn on heater', function () {

        var heater = new Heater();

        var spy = sinon.spy(heater, "on");

        container.register('Grinder', Grinder);
        container.register('Heater', heater);
        container.register('Pump', Pump);
        container.register('CoffeeMaker', CoffeeMaker);

        var coffeeMaker = container.get('CoffeeMaker', 'Samsung');

        coffeeMaker.brew();

        spy.called.should.be.true;

    });

    describe('brew', function () {

        it('should return false if heater is broken', function () {

            var heater = new Heater();

            sinon.stub(heater, "on", function() {
                return false;
            });

            container.register('Grinder', Grinder);
            container.register('Heater', heater);
            container.register('Pump', Pump);
            container.register('CoffeeMaker', CoffeeMaker);

            var coffeeMaker = container.get('CoffeeMaker', 'Samsung');

            var result = coffeeMaker.brew();

            result.should.be.false;
        });

        it('should return false if something is broken', function () {

            container.register('Grinder', Grinder);
            container.register('Heater', Heater);
            container.register('Pump', Pump);
            container.register('CoffeeMaker', CoffeeMaker);

            var coffeeMaker = container.get('CoffeeMaker', 'Samsung');

            sinon.stub(coffeeMaker, 'brew', function () {
                // make it broken
                return false;
            });

            var result = coffeeMaker.brew();

            result.should.be.false;
        });

    });

});
