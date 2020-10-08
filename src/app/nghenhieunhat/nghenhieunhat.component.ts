import {Component, OnInit} from '@angular/core';
import {ISong} from "../isong";
import {ISongService} from "../isong.service";

@Component({
  selector: 'app-nghenhieunhat10bai',
  templateUrl: './nghenhieunhat.component.html',
  styleUrls: ['./nghenhieunhat.component.scss']
})
export class NghenhieunhatComponent implements OnInit {
  songList10: ISong[] = [];
  songList30: ISong[] = [];
  constructor(private iSongService: ISongService) {
    this.getAllSong10();
  }

  ngOnInit(): void {
  }

  getAllSong10(): ISong[] {
    this.iSongService.getAllSongByPlay().subscribe(p => {
      for (let i = 0; i < 10; i++) {
        this.songList10.push(p[i]);
      }
    })
    return this.songList10;
  }
  getAllSong30(): ISong[] {
    this.iSongService.getAllSongByPlay().subscribe(p => {
      for (let i = 0; i < 30; i++) {
        this.songList30.push(p[i]);
      }
    })
    return this.songList30;
  }
}
