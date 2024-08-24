// /* eslint-disable max-classes-per-file */
// import { SingletonFactory, SingletonFactory2 } from './SingletonFactory';
// import { SingletonFactoryInterface } from './SingletonFactoryInterface';
// import { FactoryFnc } from './model/FactoryFnc';

// const env = {
//   production: false,
// };

// interface Pet {
//   name: string;
//   age: number;
// }

// abstract class PetRepository {
//   abstract findById(id: number): Pet;
// }

// class PetRepositoryMock1 implements PetRepository {
//   findById(id: number): Pet {
//     return {
//       name: 'Mock 1',
//       age: id,
//     };
//   }
// }

// class PetRepositoryMock2 implements PetRepository {
//   findById(id: number): Pet {
//     return {
//       name: 'Mock 2',
//       age: id,
//     };
//   }
// }

// const PetRepositoryFactory = () => {
//   return env.production ? new PetRepositoryMock1() : new PetRepositoryMock2();
// };

// const PetRepositorySingletonFactory =
//   SingletonFactory<PetRepository>(PetRepositoryFactory);

// PetRepositorySingletonFactory.resetInstance();
// PetRepositorySingletonFactory.setInstance(() => {
//   return new PetRepositoryMock2();
// });

// // const petRepositoryFactory =
// PetRepositorySingletonFactory.getInstance();

// // simulacion de mocks que son una clase

// // @SingletonFactory2<PetRepository>()
// // export class PetRepositoryFactory2 implements FactoryInterface<PetRepository> {
// //   create(): PetRepository {
// //     return env.production ? new PetRepositoryMock1() : new PetRepositoryMock2();
// //   }
// // }

// @SingletonFactory2()
// class PetFactory implements SingletonFactoryInterface<PetRepository> {
//   getInstance(): PetRepository {
//     throw new Error('Method not implemented.');
//   }

//   setInstance(Factory: FactoryFnc<PetRepository>): void {
//     throw new Error('Method not implemented.');
//   }

//   resetInstance() {
//     throw new Error('Method not implemented.');
//   }

//   create(): PetRepository {
//     return new PetRepositoryMock1();
//   }
// }

// const PetFactorySingleton = new PetFactory();

// // const PetFactorySingleton = new PetFactory() as SingletonClass<
// //   PetRepository,
// //   PetFactory
// // >;

// PetFactorySingleton.getInstance();
