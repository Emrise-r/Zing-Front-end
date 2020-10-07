export interface ISong {
  songId?: number;
  name?: string;
  description?: string;
  img?: string;
  artist?: string;
  date?: Date;
  genre?: string;
  plays?: number;
  likes?:number;
  user?: number;
}
