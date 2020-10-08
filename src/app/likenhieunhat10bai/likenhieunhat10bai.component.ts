import {Component, OnInit} from '@angular/core';
import {ISong} from "../isong";
import {ISongService} from "../isong.service";

@Component({
  selector: 'app-likenhieunhat10bai',
  templateUrl: './likenhieunhat10bai.component.html',
  styleUrls: ['./likenhieunhat10bai.component.scss']
})
export class Likenhieunhat10baiComponent implements OnInit {
  songListLike10: ISong[] = []
  songListLike30: ISong[] = []

  constructor(private iSongService: ISongService) {
  }

  ngOnInit(): void {
    this.getAllSong10();
  }

  getAllSong10(): ISong[] {
    this.iSongService.getAllSongByLikes().subscribe(p => {
      for (let i = 0; i < 10; i++) {
        this.songListLike10.push(p[i]);
      }
    })
    return this.songListLike10;
  }

  getAllSong30(): ISong[] {
    this.iSongService.getAllSongByLikes().subscribe(p => {
      for (let i = 0; i < 30; i++) {
        this.songListLike30.push(p[i]);
      }
    })
    return this.songListLike30;
  }
}
