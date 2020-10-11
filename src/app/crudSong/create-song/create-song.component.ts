import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ISongService} from '../../isong.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {
  songForm: FormGroup;
  @Input() backgroundColor = '#d9d9d9';
  @Input() progressColor = '#4CAF50';
  @Input() width = 90;
  constructor(private formBuilder: FormBuilder,
              private iSongService: ISongService,
              private router: Router) { }

  ngOnInit(): void {
    this.songForm = this.formBuilder.group({
      name: new FormControl(),
      artist: new FormControl(),
      description: new FormControl(),
      genre: new FormControl(),
      cover_art_url: new FormControl()
    });
  }
  createSong(): void{
    const song = this.songForm.value;
    this.iSongService.createSong(song).subscribe(() => {
      this.router.navigate(['songs']);
    });
  }
}
