import { FactoryFnc } from './model/Factory';

export function SingletonFactory<T>(DefaultFactory: FactoryFnc<T>) {
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
