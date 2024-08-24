// import { SingletonFactoryInterface } from './SingletonFactoryInterface';
// import { FactoryFnc } from './model/FactoryFnc';
// import { Newable } from './model/Newable';

// // export function SingletonFactory<T>(DefaultFactory: FactoryFnc<T>) {
// //   let instance: T | null = null;

// //   return {
// //     getInstance(): T {
// //       if (!instance) {
// //         instance = DefaultFactory();
// //       }
// //       return instance;
// //     },
// //     setInstance(Factory: FactoryFnc<T>): void {
// //       instance = Factory();
// //     },
// //     resetInstance(): void {
// //       instance = null;
// //     },
// //   };
// // }

// export function SingletonFactory<T>(Factory: FactoryFnc<T>) {
//   let instance: T | null;
//   return {
//     getInstance(): T {
//       if (!instance) {
//         instance = Factory();
//       }
//       return instance;
//     },
//     setInstance(Factory: FactoryFnc<T>): void {
//       instance = Factory();
//     },
//     resetInstance(): void {
//       instance = null;
//     },
//   };
// }

// export function SingletonFactory2<T>() {
//   return function <U extends Newable<SingletonFactoryInterface<T>>>(
//     factory: U,
//     _context?: ClassDecoratorContext<any>,
//   ): Newable<SingletonFactoryInterface<T>> {
//     let instance: T | null = null;

//     return class extends factory implements SingletonFactoryInterface<T> {
//       getInstance(): T {
//         if (!instance) {
//           instance = new factory().create();
//         }
//         return instance;
//       }

//       setInstance(Factory: FactoryFnc<T>): void {
//         instance = Factory();
//       }

//       resetInstance(): void {
//         instance = null;
//       }
//     };
//   };
// }

// export type SingletonClass<T, U> = U & SingletonFactoryInterface<T>;

// // export function SingletonFactory2() {
// //   return function (factory: Function, _propertyKey?: string | symbol) {
// //     factory.prototype.users = [];

// //     factory.prototype.create = function (entity: object) {
// //       factory.prototype.users.push(entity);
// //     };
// //   };
// // }
