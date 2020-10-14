import {Component, OnInit} from '@angular/core';
import {ISong} from '../../interface/isong';
import {ISongService} from '../../service/isong.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IArtist} from '../../interface/iartist';
import {Iloginrequest} from '../../interface/Iloginrequest';

@Component({
  selector: 'app-artist-list-song',
  templateUrl: './artist-list-song.component.html',
  styleUrls: ['./artist-list-song.component.scss']
})
export class ArtistListSongComponent implements OnInit {
  songs: ISong[] = [];
  artist: IArtist = {
    id: 0,
    name: ""
  };

  constructor(private iSongService: ISongService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    // const id = +this.activatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.getAllSongByArtist();
  }

  getAllSongByArtist() {
    this.artist.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.iSongService.getArtistAllSong(this.artist.id).subscribe(p => this.songs = p);
    return this.songs;
  }
}
