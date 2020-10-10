import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ISong} from "../interface/isong";

const API_URL = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class ISongService {


  constructor(private http: HttpClient) {
  }

  getAllSongByPlay(): Observable<ISong[]> {
    return this.http.get<ISong[]>(API_URL + `/songs/plays/desc`)
  }

  getAllSongByLikes(): Observable<ISong[]> {
    return this.http.get<ISong[]>(API_URL + `/songs/likes/desc`)
  }

  getAllSongByDate(): Observable<ISong[]> {
    return this.http.get<ISong[]>(API_URL + `/songs/date/desc`)
  }

  createSong(song: ISong): Observable<ISong> {
    return this.http.post<ISong>(API_URL + "/songs", song)
  }

}



