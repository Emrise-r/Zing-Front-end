import { Component, OnInit } from '@angular/core';
import {ISong} from '../interface/isong';
import {ISongService} from '../service/isong.service';
import {IplaylistService} from '../service/iplaylist.service';
import {IPlayList} from '../interface/i-play-list';
import {Iloginrequest} from '../interface/Iloginrequest';
import {IPlaylistSong} from '../interface/iplaylistsong';
import {PlaylistSongService} from '../service/playlist-song.service';


@Component({
  selector: 'app-baimoitao30',
  templateUrl: './baimoitao30.component.html',
  styleUrls: ['./baimoitao30.component.scss']
})
export class Baimoitao30Component implements OnInit {

  playlistSong: IPlaylistSong = {
    playlist: null,
    song: null
}
  songListDate30: ISong[] = [];
  playList: IPlayList[] = [];
  loginRequest: Iloginrequest = null;
  constructor(
    private iSongService: ISongService,
    private iPlaylistService: IplaylistService,
    private playlistSongService: PlaylistSongService
  ) {
    this.loginRequest = JSON.parse((sessionStorage.getItem("user")));
    this.getAllSong30();
  }

  ngOnInit(): void {
    this.getPlayList();
  }
  getAllSong30(): ISong[] {
    this.iSongService.getAllSongByDate().subscribe(p => {
      if(p.length < 30) {
        for (let i = 0; i < p.length; i++) {
          this.songListDate30.push(p[i])
        }
      } else {
        for (let i = 0; i < 30; i++) {
          this.songListDate30.push(p[i])
        }
      }
     })
    return this.songListDate30;
  }
  getPlayList(): IPlayList[] {
    this.iPlaylistService.getPlayListByUser(this.loginRequest.id).subscribe(pr => {
      this.playList = pr
    })
    return this.playList
  }

  addPlaylistSong(song, playlist) {
    console.log(playlist);
    this.playlistSong.playlist = playlist;
    this.playlistSong.song = song;
    console.log(this.playlistSong);
    this.playlistSongService.addPlaylistSong(this.playlistSong).subscribe(() =>
      console.log('up')
    );
  }
}
