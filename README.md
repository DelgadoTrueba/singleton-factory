# @delgadotrueba/singleton-factory

> A personal library designed for creating singleton-based class or object factories. Additionally, it enhances unit testing allowing the mocking of singleton factories

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![License][license-image]][license-url]

## Installation

```
npm install @delgadotrueba/singleton-factory --save
```

## Import

### Commonjs

```js

```

### ESM

```js

```

## Usage

```
// PetFactorySingleton.ts

const PetFactory: FactoryFnc<PetRepositoryInterface> = () => new PetRepositoryMock1();
export const PetFactorySingleton: SingletonFactoryInterface<PetRepositoryInterface> = SingletonFactory(PetFactory);

// Pet.view.ts

const PetRepository = PetFactorySingleton.getInstance()

// Pet.view.spec.ts

PetFactorySingleton.resetInstance()
PetFactorySingleton.setInstance(() => new PetRepositoryMock2())
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/%40delgadotrueba%singleton-factory
[npm-url]: https://www.npmjs.com/package/@delgadotrueba/singleton-factory
[downloads-image]: https://img.shields.io/npm/dy/%40delgadotrueba%singleton-factory
[downloads-url]: https://www.npmjs.com/package/@delgadotrueba/singleton-factory
[license-image]: http://img.shields.io/npm/l/%40delgadotrueba%singleton-factory.svg?style=flat
[license-url]: LICENSE.md
