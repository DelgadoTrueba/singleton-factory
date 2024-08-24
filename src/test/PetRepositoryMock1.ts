import { PetRepositoryInterface } from './PetRepositoryInterface';
import { PetModel } from './model/PetModel';

export class PetRepositoryMock1 implements PetRepositoryInterface {
  findById(id: number): PetModel {
    return {
      name: 'Mock 1',
      age: id,
    };
  }
}
