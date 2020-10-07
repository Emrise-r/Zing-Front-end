import {Component, OnInit} from '@angular/core';
import {ISong} from "../isong";
import {ISongService} from "../isong.service";

@Component({
  selector: 'app-nghe-nhieu-nhat',
  templateUrl: './nghe-nhieu-nhat.component.html',
  styleUrls: ['./nghe-nhieu-nhat.component.scss']
})
export class NgheNhieuNhatComponent implements OnInit {
  songPlay: ISong[] = [];

  constructor(private iSongService: ISongService) {
  }

  ngOnInit(): void {
  }
  getListSongPlay(): ISong[] {
    this.iSongService.getAllSongByPlay().subscribe(p => this.songPlay = p);
    return this.songPlay;
  }
}
