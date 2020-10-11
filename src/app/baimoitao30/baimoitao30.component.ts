import { Component, OnInit } from '@angular/core';
import {ISong} from '../isong';
import {ISongService} from '../isong.service';

@Component({
  selector: 'app-baimoitao30',
  templateUrl: './baimoitao30.component.html',
  styleUrls: ['./baimoitao30.component.scss']
})
export class Baimoitao30Component implements OnInit {
  songListDate30: ISong[] = [];
  constructor(private iSongService: ISongService) {
    this.getAllSong30();
  }

  ngOnInit(): void {
  }
  getAllSong30(): ISong[] {
    this.iSongService.getAllSongByDate().subscribe(p => {
      for (let i = 0; i < 30; i++) {
        this.songListDate30.push(p[i]);
      }
    });
    return this.songListDate30;
  }
}
