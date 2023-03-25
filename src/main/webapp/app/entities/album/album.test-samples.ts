import { IAlbum, NewAlbum } from './album.model';

export const sampleWithRequiredData: IAlbum = {
  id: 51589,
  name: 'back-end',
};

export const sampleWithPartialData: IAlbum = {
  id: 10236,
  name: 'Developer',
};

export const sampleWithFullData: IAlbum = {
  id: 277,
  name: 'Table',
};

export const sampleWithNewData: NewAlbum = {
  name: 'Guinea Outdoors',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
