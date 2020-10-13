import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ISong} from "../interface/isong";
import {ISongService} from "../service/isong.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {SongControllerService} from "../service/song-controller.service";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";
import * as moment from "moment";

@Component({
  selector: 'app-playmusic',
  templateUrl: './playmusic.component.html',
  styleUrls: ['./playmusic.component.scss']
})
export class PlaymusicComponent implements OnInit {
  audioFile = new Audio();
  song: ISong;
  currentTime = "00:00";
  duration = "00:00";
  seek = 0;
  songName = 'unknown_songName';
  artist = 'unknown_artist'
  audioEvent = [
    'ended',
    'error',
    'play',
    'playing',
    'pause',
    'timeupdate',
    'canplay',
    'loadedmetadata',
    'loadstart'
  ]

  currentSong = null;

  constructor(
    private iSongService: ISongService,
    private songController: SongControllerService,
    private cookie: CookieService
  ) {
    songController.changeEmitted$.subscribe(x => {
      this.currentSong = cookie.get('current-song');
      if( this.currentSong != null) {
        this.onChanges();
      }
    });
  }

  ngOnInit(): void {
    if (this.currentSong != null){
      this.onChanges();
    }
    console.log('init')
  }

  onChanges() {
    this.getSongById(parseInt(this.currentSong));

  }

  getSongById(id: number): void {
    this.iSongService.getSongByID(id).subscribe(p => {
      this.song = p;
      console.log(this.song);
    },error => console.log('err'),() => this.openFile(this.song))
  }

  getUrl(){
    if (this.song.song_url) {
    }
  }

  play(){
    this.audioFile.play().finally(() => console.log('end'));
  }

  pause(){
    this.audioFile.pause();
  }

  stop() {
    this.audioFile.pause();
    this.audioFile.currentTime = 0;
  }

  openFile(song: ISong){
    this.streamSong(song).subscribe();
  }

  setVolume(event) {
    this.audioFile.volume = event.target.value;
  }

  streamSong(song: ISong) {
    return new Observable(observable => {
      this.audioFile.src = this.song.song_url;
      this.audioFile.load();
      this.audioFile.play().finally(() => console.log('end'));

      const handler = (event: Event) => {
          this.seek = this.audioFile.currentTime;
          this.currentTime = this.timeFormat(this.audioFile.currentTime);
          this.duration = this.timeFormat(this.audioFile.duration);
          this.songName = this.song.name;
          this.artist = this.song.artist;
      }

      this.addEvent(this.audioFile, this.audioEvent, handler);
      return () => {
        this.audioFile.pause();
        this.audioFile.currentTime = 0;
        this.removeEvent(this.audioFile, this.audioEvent, handler);
      }
    })
  }

  addEvent(audio, event, handler) {
    event.forEach(event => {
      audio.addEventListener(event, handler);
    })
  }

  removeEvent(audio, event, handler) {
    event.forEach(event => {
      audio.removeEventListener(event, handler);
    })
  }

  setSeek(event) {
    this.audioFile.currentTime = event.target.value;
  }

  timeFormat (time, format="HH:mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
}
