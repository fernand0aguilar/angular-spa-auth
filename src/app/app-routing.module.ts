import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicDetailComponent } from './components/comic-detail/comic-detail.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicListComponent } from './components/comic-list/comic-list.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/comics', pathMatch: 'full' },
  { path: 'comics', children: [
    { path: '', component: ComicsComponent },
    { path: 'comic/:id', component: ComicDetailComponent }
  ]},
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthComponent },
  { path: 'signup', component: AuthComponent },
  { path: '**', redirectTo: '/comics' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
