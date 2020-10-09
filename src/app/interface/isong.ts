import {Iuser} from './iuser';

export interface ISong {
  songId?: number;
  name?: string;
  songFile?: any;
  description?: string;
  img?: string;
  imgFile?: any;
  artist?: string;
  date?: Date;
  genre?: string;
  plays?: number;
  likes?:number;
  user?: Iuser;
}
