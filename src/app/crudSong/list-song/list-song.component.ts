import {Component, OnInit} from '@angular/core';
import {ISong} from '../../interface/isong';
import {ISongService} from '../../service/isong.service';


@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss']
})
export class ListSongComponent implements OnInit {

  songs: ISong[] = [];
  constructor( private iSongService: ISongService) {
    this.getListSongs();
  }

  ngOnInit(): void {
  }
  getListSongs(): ISong[] {
    this.iSongService.getAllSongByUser().subscribe(p => this.songs = p);
    return this.songs;
  }
}