import { PetModel } from './model/PetModel';

export abstract class PetRepositoryInterface {
  abstract findById(id: number): PetModel;
}
