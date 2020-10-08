import {Component, OnInit} from '@angular/core';
import {ISong} from "../isong";
import {ISongService} from "../isong.service";

@Component({
  selector: 'app-nghenhieunhat',
  templateUrl: './nghenhieunhat.component.html',
  styleUrls: ['./nghenhieunhat.component.scss']
})
export class NghenhieunhatComponent implements OnInit {
  songList6: ISong[] = [];

  constructor(private iSongService: ISongService) {
    this.getAllSong10();
  }

  ngOnInit(): void {
  }

  getAllSong10(): ISong[] {
    this.iSongService.getAllSongByPlay().subscribe(p => {
      for (let i = 0; i < 6; i++) {
        this.songList6.push(p[i]);
      }
    })
    return this.songList6;
  }

}
