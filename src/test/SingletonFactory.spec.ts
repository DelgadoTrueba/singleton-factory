import { SingletonFactory } from '../lib/SingletonFactory';
import { SingletonFactoryInterface } from '../lib/SingletonFactoryInterface';
import { FactoryFnc } from '../lib/model/FactoryFnc';
import { PetRepositoryInterface } from './PetRepositoryInterface';
import { PetRepositoryMock1 } from './PetRepositoryMock1';
import { PetRepositoryMock2 } from './PetRepositoryMock2';

describe('SingletonFactory', () => {
  let mockFactory: FactoryFnc<PetRepositoryInterface>;
  let singleton: SingletonFactoryInterface<PetRepositoryInterface>;

  beforeEach(() => {
    mockFactory = jest.fn(() => new PetRepositoryMock1());
    singleton = SingletonFactory(mockFactory);
  });

  it('should create a single instance', () => {
    const instance1 = singleton.getInstance();
    const instance2 = singleton.getInstance();

    expect(instance1).toBe(instance2);
    expect(mockFactory).toHaveBeenCalledTimes(1);
  });

  it('should allow setting a new instance', () => {
    const newFactory: FactoryFnc<PetRepositoryInterface> = jest.fn(
      () => new PetRepositoryMock2(),
    );

    singleton.setInstance(newFactory);
    const instance = singleton.getInstance();

    const id = 1;

    expect(instance.findById(id)).toEqual({
      name: 'Mock 2',
      age: id,
    });
    expect(newFactory).toHaveBeenCalledTimes(1);
    expect(mockFactory).toHaveBeenCalledTimes(0);
  });

  it('should reset the instance', () => {
    const instance1 = singleton.getInstance();

    singleton.resetInstance();

    const instance2 = singleton.getInstance();

    expect(instance1).not.toBe(instance2);
    expect(mockFactory).toHaveBeenCalledTimes(2);
  });

  it('should create a new instance after reset', () => {
    singleton.getInstance();

    singleton.resetInstance();
    const instanceAfterReset = singleton.getInstance();

    const id = 1;

    expect(instanceAfterReset.findById(id)).toEqual({
      name: 'Mock 1',
      age: id,
    });
    expect(mockFactory).toHaveBeenCalledTimes(2);
  });
});
