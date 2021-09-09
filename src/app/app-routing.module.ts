import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EpisodeComponent } from './episode/episode.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'episode/:id', component: EpisodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
