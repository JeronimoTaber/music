import { IGenre, NewGenre } from './genre.model';

export const sampleWithRequiredData: IGenre = {
  id: 52824,
  name: 'neural Avon',
};

export const sampleWithPartialData: IGenre = {
  id: 86879,
  name: 'Technician',
};

export const sampleWithFullData: IGenre = {
  id: 74579,
  name: 'Account Optimization Outdoors',
};

export const sampleWithNewData: NewGenre = {
  name: 'Isle',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
