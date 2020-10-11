import { Component, OnInit } from '@angular/core';
import {ISong} from "../interface/isong";
import {ISongService} from "../service/isong.service";

@Component({
  selector: 'app-top30',
  templateUrl: './top30.component.html',
  styleUrls: ['./top30.component.scss']
})
export class Top30Component implements OnInit {
songList30: ISong[] = [];
  constructor(private iSongService: ISongService) { }

  ngOnInit(): void {
  this.getAllSong30();
  }
  getAllSong30(): ISong[] {
    this.iSongService.getAllSongByPlay().subscribe(p => {
      if(p.length < 30) {
        for (let i = 0; i < p.length; i++) {
          this.songList30.push(p[i]);
        }
      } else {
        for (let i = 0; i < 30; i++) {
          this.songList30.push(p[i]);
        }
      }
     })
    return this.songList30;
  }
}
