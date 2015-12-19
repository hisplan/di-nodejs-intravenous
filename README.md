# Dependency Injection using Intravenous for Node.js Application

Exploring [Intravenous](http://www.royjacobs.org/intravenous/) as a dependency injection library for Node.js application

For unit testing, the following libraries were used:
- [Mocha](https://mochajs.org) as a BDD-style test runner
- [Chai](http://chaijs.com) as an assertion library
- [Sinon](http://sinonjs.org) as a spy/stub/mock library 

## Installation

Run this to install all the necessary libraries:
```bash
npm install
```

## Run

Run the application:
```bash
npm src/app
```

Run the unit test:
```bash
mocha
```

## Notes

- Intravenous DI library
    - Pros
        - Able to dispose.
    - Cons
        - Need to explicitly register all the dependenciens in advance.

# Future

- Try out Factory method to create a new instance every time.
- Optional dependencies using the `?` suffix.

## References

- http://www.mariocasciaro.me/dependency-injection-in-node-js-and-other-architectural-patterns
