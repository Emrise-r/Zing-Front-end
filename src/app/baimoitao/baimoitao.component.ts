import {Component, OnInit} from '@angular/core';
import {ISong} from '../interface/isong';
import {ISongService} from '../service/isong.service';
import {CookieService} from "ngx-cookie-service";
import {ActivatedRoute} from "@angular/router";






@Component({
  selector: 'app-baimoitao',
  templateUrl: './baimoitao.component.html',
  styleUrls: ['./baimoitao.component.scss']
})
export class BaimoitaoComponent implements OnInit {
  songListDate6: ISong[] = [];


  constructor(
    private iSongService: ISongService,
    private cookie: CookieService,
  ) {
  }

  ngOnInit(): void {
    this.getAllSong10();
  }

  getAllSong10(): ISong[] {
    this.iSongService.getAllSongByDate().subscribe(p => {
      for (let i = 0; i < 6; i++) {
        this.songListDate6.push(p[i]);
      }
    });
    return this.songListDate6;
  }

  playSong(songId, event) {
    this.cookie.set('current-song', `${songId}`,10000);
    console.log(this.cookie.get('current-song'));
    console.log(event);
  }

}
