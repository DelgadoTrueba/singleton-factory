import { SingletonFactoryInterface } from './SingletonFactoryInterface';
import { FactoryFnc } from './model/FactoryFnc';

export function SingletonFactory<T>(
  DefaultFactory: FactoryFnc<T>,
): SingletonFactoryInterface<T> {
  let instance: T | null = null;

  return {
    getInstance(): T {
      if (!instance) {
        instance = DefaultFactory();
      }
      return instance;
    },
    setInstance(Factory: FactoryFnc<T>): void {
      instance = Factory();
    },
    resetInstance(): void {
      instance = null;
    },
  };
}
