import { Component, OnInit } from '@angular/core';
import {ISong} from '../../isong';
import {ISongService} from '../../isong.service';
import {ActivatedRoute} from '@angular/router';

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
