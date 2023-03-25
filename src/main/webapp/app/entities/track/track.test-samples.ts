import { ITrack, NewTrack } from './track.model';

export const sampleWithRequiredData: ITrack = {
  id: 60514,
  name: 'Motorway',
};

export const sampleWithPartialData: ITrack = {
  id: 49389,
  name: 'invoice Marketing',
};

export const sampleWithFullData: ITrack = {
  id: 1658,
  name: 'Credit generating methodologies',
};

export const sampleWithNewData: NewTrack = {
  name: 'Usability Highway',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
