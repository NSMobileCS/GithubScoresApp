import { Component, OnInit } from '@angular/core';
import { ScoreServiceService } from './../score-service.service';

@Component({
  selector: 'app-github-score',
  templateUrl: './github-score.component.html',
  styleUrls: ['./github-score.component.css']
})
export class GithubScoreComponent implements OnInit {

  gitScore = {
    score: -1,
    username: '',
    message: ''
  }
  
  constructor(private _scoreService: ScoreServiceService) { }

  getScore() {
    console.log(this.gitScore.username);
    if (this.gitScore.username.length > 2){
      this._scoreService.getGitScore(this.gitScore.username, (res) => {
        this.gitScore.score = res;
      });
    }
  }


  ngOnInit() {  }

}
