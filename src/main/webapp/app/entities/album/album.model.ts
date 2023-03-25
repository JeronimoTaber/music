import { IArtist } from 'app/entities/artist/artist.model';
import { IGenre } from 'app/entities/genre/genre.model';

export interface IAlbum {
  id: number;
  name?: string | null;
  artist?: Pick<IArtist, 'id' | 'name'> | null;
  genre?: Pick<IGenre, 'id' | 'name'> | null;
}

export type NewAlbum = Omit<IAlbum, 'id'> & { id: null };
