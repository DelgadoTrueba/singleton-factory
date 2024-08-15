/* eslint-disable max-classes-per-file */
import { SingletonFactory } from './SingletonFactory';

const env = {
  production: false,
};

interface Pet {
  name: string;
  age: number;
}

abstract class PetRepository {
  abstract findById(id: number): Pet;
}

class PetRepositoryMock1 implements PetRepository {
  findById(id: number): Pet {
    return {
      name: 'Mock 1',
      age: id,
    };
  }
}

class PetRepositoryMock2 implements PetRepository {
  findById(id: number): Pet {
    return {
      name: 'Mock 2',
      age: id,
    };
  }
}

const PetRepositoryFactory = () => {
  return env.production ? new PetRepositoryMock1() : new PetRepositoryMock2();
};

const PetRepositorySingletonFactory =
  SingletonFactory<PetRepository>(PetRepositoryFactory);

PetRepositorySingletonFactory.resetInstance();
PetRepositorySingletonFactory.setInstance(() => {
  return new PetRepositoryMock2();
});

// const petRepositoryFactory =
PetRepositorySingletonFactory.getInstance();

// simulacion de mocks que son una clase
