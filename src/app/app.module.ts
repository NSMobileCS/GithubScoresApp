import { ScoreServiceService } from './score-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubScoreComponent } from './github-score/github-score.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ScoreServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
