export interface Newable<T> extends Function {
  new (...args: any[]): T;
}
