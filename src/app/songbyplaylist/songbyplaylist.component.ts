import { Component, OnInit } from '@angular/core';
import {PlaylistSongService} from '../service/playlist-song.service';
import {ISong} from '../interface/isong';
import {IPlaylistSong} from '../interface/iplaylistsong';
import {ActivatedRoute, Router} from '@angular/router';
import {Iloginrequest} from '../interface/Iloginrequest';
import {IplaylistService} from '../service/iplaylist.service';
import {IPlayList} from '../interface/i-play-list';

@Component({
  selector: 'app-songbyplaylist',
  templateUrl: './songbyplaylist.component.html',
  styleUrls: ['./songbyplaylist.component.scss']
})
export class SongbyplaylistComponent implements OnInit {

  id: number;
  songs: ISong[] = [];
  iPlaylistSongs: IPlaylistSong[];
  loginRequest: Iloginrequest = null;
  playlist: IPlayList;

  constructor(
    private playlistSongService: PlaylistSongService,
    private activatedRoute: ActivatedRoute,
    private getPlaylist: IplaylistService,
    private router: Router
  ) {
    this.loginRequest = JSON.parse((sessionStorage.getItem('user')));
    console.log(this.loginRequest.id)
  }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getAllSongByPlayList(this.id);
    this.getPlaylist.getPlayListById(this.id).subscribe(next =>{
      this.playlist = next;
      console.log(this.playlist.user.userId)
    })
    // console.log(this.iPlaylistSongs)
  }

  getAllSongByPlayList(id: number) {
    this.playlistSongService.getPlayListSong(id).subscribe(p => {
      this.iPlaylistSongs = p;
      }, error => {},() => {
      this.iPlaylistSongs.forEach( item => {
        this.songs.push(item.song);
      })
      // for(let i = 0; i < this.iPlaylistSongs.length; i++) {
      //   this.songs.push(this.iPlaylistSongs[i].song)
      // }
      console.log(this.songs);
      console.log(this.songs[0].user.userId);
    })
  }

  delete(song){
    let playlistSongId = 0;
    this.iPlaylistSongs.forEach(item => {
      if(song == item.song) {
        playlistSongId = item.id;
      }
    })
    this.playlistSongService.deletePlaylistSong(playlistSongId).subscribe(() => {
      this.songs = [];
      this.getAllSongByPlayList(this.id)
      });
  }

}
