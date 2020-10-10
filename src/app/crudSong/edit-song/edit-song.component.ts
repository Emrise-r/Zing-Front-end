import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ISong} from '../../isong';
import {ISongService} from '../../isong.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.scss']
})
export class EditSongComponent implements OnInit {
  songForm: FormGroup;
  song: ISong = null;

  constructor(private iSongService: ISongService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = +(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getSongById(id);
    this.songForm = this.formBuilder.group({
      name: new FormControl(),
      artist: new FormControl(),
      description: new FormControl()
    });
  }

  getSongById(id: number): void {
    this.iSongService.getSongByID(id).subscribe(pr => this.song = pr);
  }

  editSong(): void {
    const song = this.songForm.value;
    this.iSongService.updateSong(this.song.songId, song).subscribe(() => {
      this.router.navigate(['song']);
    });
  }
}
