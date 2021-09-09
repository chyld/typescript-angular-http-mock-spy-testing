import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EpisodeComponent } from './episode/episode.component';
import { TheRootComponent } from './the-root/the-root.component';

@NgModule({
  declarations: [TheRootComponent, AppComponent, EpisodeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [TheRootComponent],
})
export class AppModule {}
