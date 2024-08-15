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

const PetFactory = SingletonFactory<PetRepository>(() => {
  return env.production
    ? {
        useClass: PetRepositoryMock1,
        deps: [],
      }
    : {
        useClass: PetRepositoryMock2,
        deps: [],
      };
});

PetFactory.getInstance();
PetFactory.resetInstance();
PetFactory.setInstance(() => {
  return {
    useClass: PetRepositoryMock2,
    deps: [],
  };
});

// simulacion de mocks que son una clase
