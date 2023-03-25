export interface IArtist {
  id: number;
  name?: string | null;
}

export type NewArtist = Omit<IArtist, 'id'> & { id: null };
