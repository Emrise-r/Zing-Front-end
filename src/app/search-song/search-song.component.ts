import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {ISong} from '../interface/isong';
import {ISongService} from '../service/isong.service';

@Component({
  selector: 'app-search-song',
  templateUrl: './search-song.component.html',
  styleUrls: ['./search-song.component.scss']
})
export class SearchSongComponent implements OnInit {
  sub: Subscription;
  songs: ISong[] = [];
  name: string;
  constructor(private activatedRoute: ActivatedRoute,
              private iSongService: ISongService) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
   this.name = paramMap.get('name');
    });
    this.iSongService.searchSongByName(this.name).subscribe(p => this.songs = p);
  }

}
