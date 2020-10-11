import { Component, OnInit } from '@angular/core';
import {ISong} from '../interface/isong';

import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Iuser} from '../interface/iuser';
import {ISongService} from '../service/isong.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {

  user: Iuser = {
    userId: 5,
}
  song: ISong = {
    song_url: ''
  };

  uploadProgress$: Observable<number>

  process$: number;
  songForm: FormGroup;
  songFileSelected: File = null;
  checkSongFile: boolean;
  checkUploadedFile: boolean = true;
  message: string;

  constructor(
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private service: ISongService
  ) { }

  ngOnInit(): void {
    this.songForm = this.fb.group({
      name: ['', [Validators.required]],
      artist: ['', [Validators.required]],
      genre: [''],
      description: ['']
    })
  }

  checkFile(event) {
      if (event.target.files && event.target.files[0]) {
        console.log(event.target.files[0].name.split('.').slice(1,2))
        if (event.target.files[0].name.split('.').slice(1,2) == "mp3") {
          this.songFileSelected = event.target.files[0];
          this.getSongUrl();
          this.checkSongFile = false;
        } else {
          this.checkSongFile = true;
        }
      }
  }
  submit(){
    this.checkSongFile = false;
    this.song.name = this.songForm.value.name;
    this.song.artist = this.songForm.value.artist;
    this.song.genre = this.songForm.value.genre;
    this.song.description = this.songForm.value.description;
    this.song.date = new Date();
    this.song.user = this.user;
    console.log(this.song)
    this.service.createSong(this.song).subscribe(next => {console.log(next)})
  }



  getSongUrl() {
    const asName = this.songFileSelected.name.split('.').slice(0,1)
    const file = this.songFileSelected;
    const filePath = `Audio/${asName}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Audio/${asName}`, file);
    task.percentageChanges().subscribe(next => {
      this.process$ = next;
      console.log(this.process$);
      if (this.process$ == 100) {
        this.checkUploadedFile = false;

      };
    }, error => {console.log(error);});
    // this.uploadProgress$ = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          if (url) {
            this.song.song_url = url;
          }
          console.log(this.song.song_url);
          this.message = 'upload completed';
          // alert("upload completed, please click submit")
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

  checkform(): boolean {
    if (this.songForm.invalid || this.checkSongFile || this.checkUploadedFile) {
      return true;
    }
  }

}
