import {Iuser} from './iuser';

export interface ISong {
  songId?: number;
  name?: string;
  description?: string;
  cover_art_url?: string;
  artist?: any;
  genre?: string;
  date?: Date;
  plays?: number;
  likes?: number;
  user?: Iuser;
  songFile?: any;
  song_url?: string;
  imgFile?: any;
}
