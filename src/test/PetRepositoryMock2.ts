import { PetRepositoryInterface } from './PetRepositoryInterface';
import { PetModel } from './model/PetModel';

export class PetRepositoryMock2 implements PetRepositoryInterface {
  findById(id: number): PetModel {
    return {
      name: 'Mock 2',
      age: id,
    };
  }
}
