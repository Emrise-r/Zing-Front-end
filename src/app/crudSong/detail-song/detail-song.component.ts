import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {ISong} from '../../interface/isong';
import {ISongService} from '../../service/isong.service';

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrls: ['./detail-song.component.scss']
})
export class DetailSongComponent implements OnInit {
  song: ISong;
  constructor(private iSongService: ISongService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.iSongService.getSongByID(id).subscribe(next => this.song = next);
  }

}
