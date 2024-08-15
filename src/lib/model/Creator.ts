import { Newable } from './Newable';

export type CreatorFnc<T> = () => {
  useClass: Newable<T>;
  deps: any[];
};
