import { CreatorFnc } from './model/Creator';

export function SingletonFactory<T>(DefaultCreator: CreatorFnc<T>) {
  let instance: T | null = null;
  const { useClass: DefaultUseClass, deps: defaultDeps } = DefaultCreator();

  return {
    getInstance(): T {
      if (!instance) {
        instance = new DefaultUseClass(...defaultDeps);
      }
      return instance;
    },
    setInstance(Creator: CreatorFnc<T>): void {
      const { useClass: UseClass, deps } = Creator();
      instance = new UseClass(...deps);
    },
    resetInstance(): void {
      instance = null;
    },
  };
}

// export class SingletonFactory<T> {
//   private static instance: unknown | null = null;

//   static getInstance<T>(): T {
//     if (!SingletonFactory.instance) {
//       throw new Error('Instance not created yet.');
//     }
//     return SingletonFactory.instance as T;
//   }

//   static setInstance<T>(Creator: Creator<T>): void {
//     const { Newable, args } = Creator();
//     SingletonFactory.instance = new Newable(...args);
//   }

//   static resetInstance(): void {
//     SingletonFactory.instance = null;
//   }
// }

// import { Newable } from './model/Newable';

// let _instance: T | null = null;
// let _Creator: Newable<unknown> | null = null;

// export function getInstance<T>(Creator: Newable<T>): T {
//   if (!_instance) {
//     if (_Creator) {
//       _instance = new Creator();
//     } else {
//       throw new Error();
//     }
//   }
//   return _instance;
// }

// export function setInstance<T>(Creator: Newable<T>): void {
//   _Creator = Creator;
// }
