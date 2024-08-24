import { FactoryFnc } from './model/FactoryFnc';
import { FactoryInterface } from './model/FactoryInterface';

export interface SingletonFactoryInterface<T> extends FactoryInterface<T> {
  getInstance(): T;
  setInstance(Factory: FactoryFnc<T>): void;
  resetInstance();
}
