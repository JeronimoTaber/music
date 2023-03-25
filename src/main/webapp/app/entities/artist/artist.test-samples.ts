import { IArtist, NewArtist } from './artist.model';

export const sampleWithRequiredData: IArtist = {
  id: 70921,
  name: 'synthesizing Kentucky Park',
};

export const sampleWithPartialData: IArtist = {
  id: 51152,
  name: 'SQL Tennessee',
};

export const sampleWithFullData: IArtist = {
  id: 81685,
  name: 'Kids Mali Incredible',
};

export const sampleWithNewData: NewArtist = {
  name: 'Steel',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
