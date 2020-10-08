import {Component, OnInit} from '@angular/core';
import {ISong} from "../isong";
import {ISongService} from "../isong.service";

@Component({
  selector: 'app-baimoitao10',
  templateUrl: './baimoitao.component.html',
  styleUrls: ['./baimoitao.component.scss']
})
export class BaimoitaoComponent implements OnInit {
  songListDate10: ISong[] = [];
  songListDate30: ISong[] = [];
  constructor(private iSongService: ISongService) {
  }

  ngOnInit(): void {
    this.getAllSong10();
  }

  getAllSong10(): ISong[] {
    this.iSongService.getAllSongByDate().subscribe(p => {
      for (let i = 0; i < 10; i++) {
        this.songListDate10.push(p[i])
      }
    })
    return this.songListDate10;
  }
  getAllSong30(): ISong[] {
    this.iSongService.getAllSongByDate().subscribe(p => {
      for (let i = 0; i < 30; i++) {
        this.songListDate30.push(p[i])
      }
    })
    return this.songListDate30;
  }
}