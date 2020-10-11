import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ISong} from '../../interface/isong';
import {ISongService} from '../../service/isong.service';
import {Iuser} from '../../interface/iuser';
import {Observable, Subscription} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Iloginrequest} from '../../interface/Iloginrequest';


@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit {
  user: Iuser = {
    userId: 0,
  };
  song: ISong = {
    song_url: ''
  };
  uploadProgress$: Observable<number>;
  process$: number;
  songForm: FormGroup;
  songFileSelected: File = null;
  checkSongFile: boolean;
  checkUploadedFile = true;
  message: string;
  sub:  Subscription;
  loginRequest: Iloginrequest;
  constructor(private storage: AngularFireStorage,
              private fb: FormBuilder,
              private service: ISongService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    this.loginRequest = JSON.parse((sessionStorage.getItem("user")));
    console.log(this.loginRequest.id);
    this.user.userId = this.loginRequest.id;
  }

  ngOnInit(): void {
    this.songForm = this.fb.group({
      name: ['', [Validators.required]],
      artist: ['', [Validators.required]],
      genre: [''],
      description: ['']
    });
    this.checkSongFile = false;
    this.checkUploadedFile = false;
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      this.song.songId = +paramMap.get('id');
    });
    this.getSongById(this.song.songId);
  }
  checkFile(event): void {
    if (event.target.files && event.target.files[0]) {
      this.checkUploadedFile = true;
      console.log(event.target.files[0].name.split('.').slice(1, 2));
      if (event.target.files[0].name.split('.').slice(1, 2) == 'mp3') {
        this.songFileSelected = event.target.files[0];
        this.getSongUrl();
        this.checkSongFile = false;
      } else {
        this.checkSongFile = true;
      }
    }
  }


  submit() {
    // this.checkSongFile = false;
    // this.song.name = this.songForm.value.name;
    // this.song.artist = this.songForm.value.artist;
    // this.song.genre = this.songForm.value.genre;
    // this.song.description = this.songForm.value.description;
    this.song = {
      ...this.song,
      ...this.songForm.value
    }
    this.song.date = new Date();
    this.song.user = this.user;
    console.log(this.song);
    this.service.createSong(this.song).subscribe(next => this.router.navigateByUrl('/personal')
    );
  }

  getSongUrl() {
    const asName = this.songFileSelected.name.split('.').slice(0, 1);
    const file = this.songFileSelected;
    const filePath = `Audio/${asName}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Audio/${asName}`, file);
    task.percentageChanges().subscribe(next => {
      this.process$ = next;
      console.log(this.process$);
      // if (this.process$ == 100) {
      //   this.checkUploadedFile = false;
      // };
    }, error => {
      console.log(error);
    },() => this.checkUploadedFile = false);
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
    return this.songForm.get('name');
  }

  get songFile() {
    return this.songForm.get('songFile');
  }

  get artist() {
    return this.songForm.get('artist');
  }

  checkform(): boolean {
    if (this.songForm.invalid || this.checkSongFile || this.checkUploadedFile) {
      return true;
    }
  }
  getSongById(id: number): void {
    this.service.getSongByID(id).subscribe(pr => {
      this.song = pr;
      this.songForm.patchValue(pr)
    });
  }

  editSong(): void {
    const song = this.songForm.value;
    this.service.updateSong(this.song.songId, song).subscribe(() => {
      this.router.navigate(['song']);
    });
  }
}
