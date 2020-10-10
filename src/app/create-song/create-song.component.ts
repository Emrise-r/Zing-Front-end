import { Component, OnInit } from '@angular/core';
import {ISong} from '../interface/isong';

import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Iuser} from '../interface/iuser';
import {ISongService} from '../service/isong.service';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {

  user: Iuser = {
    id: 5,
}
  song: ISong = {
    song_url: ''
  };
  songForm: FormGroup;
  songFileSelected: File = null;
  checkSongFile: boolean = true;

  constructor(
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private service: ISongService
  ) { }

  ngOnInit(): void {
    this.songForm = this.fb.group({
      name: ['', [Validators.required]],
      artist: ['', [Validators.required]]
    })
  }

  checkFile(event) {
      if (event.target.files && event.target.files[0]) {
        console.log(event.target.files[0].name.split('.').slice(1,2))
        if (event.target.files[0].name.split('.').slice(1,2) == "mp3") {
          this.checkSongFile = false;
          this.song = this.songForm.value;
          this.song.date = new Date();
          this.song.user = this.user;
          this.songFileSelected = event.target.files[0];
          this.getSongUrl(event);
        }
      }
  }

  submit(){
    // this.song = this.songForm.value;
    // this.song.date = new Date();
    // this.song.user = this.user.id;
    // this.getSongUrl()
    console.log(this.song)
    this.service.createSong(this.song).subscribe(next => {console.log(next)})
  }



  getSongUrl(event) {
    // let n = Date.now();
    // const asName = this.song.name;
    const asName = event.target.files[0].name.split('.').slice(0,1)
    const file = this.songFileSelected;
    const filePath = `Audio/${asName}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Audio/${asName}`, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          if (url) {
            this.song.song_url = url;
          }
          console.log(this.song.song_url);
        });
      })
    ).subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  get name() {
    return this.songForm.get('name')
  }

  get songFile() {
    return this.songForm.get('songFile')
  }

  get artist() {
    return this.songForm.get('artist')
  }

}
