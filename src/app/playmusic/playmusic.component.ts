import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ISong} from "../interface/isong";
import {ISongService} from "../service/isong.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-playmusic',
  templateUrl: './playmusic.component.html',
  styleUrls: ['./playmusic.component.scss']
})
export class PlaymusicComponent implements OnInit, OnChanges {
  song: ISong;

  @Input()
  currentSong = null;

  constructor(private iSongService: ISongService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.currentSong != null){
      this.getSongById(this.currentSong);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
      if ('currentSong' in changes) {
        this.currentSong = changes.currentSong.currentValue;
        this.getSongById(this.currentSong);
      }
  }

  getSongById(id: number): void {
    this.iSongService.getSongByID(id).subscribe(p => this.song = p)
  }
}
