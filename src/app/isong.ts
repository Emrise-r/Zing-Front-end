export interface ISong {
  songId?: number;
  name?: string;
  description?: string;
  cover_art_url?: string;
  artist?: string;
  date?: Date;
  genre?: string;
  plays?: number;
  likes?: number;
  user?: number;
}
