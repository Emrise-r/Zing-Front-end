import { Component, OnInit } from '@angular/core';
import {PlaylistSongService} from '../service/playlist-song.service';
import {ISong} from '../interface/isong';
import {IPlaylistSong} from '../interface/iplaylistsong';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-songbyplaylist',
  templateUrl: './songbyplaylist.component.html',
  styleUrls: ['./songbyplaylist.component.scss']
})
export class SongbyplaylistComponent implements OnInit {

  id: number;
  songs: ISong[] = [];
  iPlaylistSongs: IPlaylistSong[];

  a: any[];

  constructor(
    private playlistSongService: PlaylistSongService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getAllSongByPlayList(this.id);
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
