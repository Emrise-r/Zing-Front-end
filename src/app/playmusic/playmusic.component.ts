import {Component, OnInit} from '@angular/core';
import {ISong} from "../isong";
import {ISongService} from "../isong.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-playmusic',
  templateUrl: './playmusic.component.html',
  styleUrls: ['./playmusic.component.scss']
})
export class PlaymusicComponent implements OnInit {
  song: ISong = null;

  constructor(private iSongService: ISongService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = (+this.activatedRoute.snapshot.params['id']);
    this.getSongById(id)
  }

  getSongById(id: number): void {
    this.iSongService.getSongByID(id).subscribe(p => this.song = p)
  }
}
