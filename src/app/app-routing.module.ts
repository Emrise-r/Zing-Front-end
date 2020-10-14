import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Baimoitao30Component} from './baimoitao30/baimoitao30.component';
import {Top30Component} from './top30/top30.component';
import {ListSongComponent} from './crudSong/list-song/list-song.component';
import {CreateSongComponent} from './crudSong/create-song/create-song.component';
import {NgModule} from '@angular/core';

import {EditSongComponent} from './crudSong/edit-song/edit-song.component';
import {DeleteSongComponent} from './crudSong/delete-song/delete-song.component';
import {DetailSongComponent} from './crudSong/detail-song/detail-song.component';

import {PlaymusicComponent} from "./playmusic/playmusic.component";
import {LoginComponent} from "./login/login.component";
import {SearchSongComponent} from './search-song/search-song.component';
import {ListArtistComponent} from './crudArtist/list-artist/list-artist.component';
import {CreateArtistComponent} from './crudArtist/create-artist/create-artist.component';
import {ArtistListSongComponent} from './crudArtist/artist-list-song/artist-list-song.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'newSong30',
    component: Baimoitao30Component
  },
  {
    path: 'top30',
    component: Top30Component
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'personal',
    component: ListSongComponent,
  },
  {
    path: 'create',
    component: CreateSongComponent
  },
  {
    path: 'edit/:id',
    component: EditSongComponent
  },
  {
    path: 'delete/:id',
    component: DeleteSongComponent
  },
  {
    path: 'detail/:id',
    component: DetailSongComponent
  },
  {
    path: 'create',
    component: CreateSongComponent
  },
  {
    path: 'search/:name',
    component: SearchSongComponent
  },
  {
    path: 'artist',
    component: ListArtistComponent
  },
  {
    path: 'createArtist',
    component: CreateArtistComponent
  },
  {
    path: 'listByArtist/:id',
    component: ArtistListSongComponent
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'newSong30',
    component: Baimoitao30Component,
  },
  {
    path: 'top30',
    component: Top30Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
