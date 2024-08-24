import { FactoryFnc } from './model/FactoryFnc';

export interface SingletonFactoryInterface<T> {
  getInstance(): T;
  setInstance(Factory: FactoryFnc<T>): void;
  resetInstance(): void;
}
