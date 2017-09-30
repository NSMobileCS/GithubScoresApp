import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ScoreServiceService {

  constructor(private _http: Http) { }

  getGitScore(username, callback){
    let url = 'https://api.github.com/users/'+String(username);
    this._http.get(url).subscribe(
      (response) => {
        let gitData = response.json();
        let score = Number(gitData.public_repos) + Number(gitData.followers);
        console.log(gitData);
        console.log(score);
        callback(score);
      },
      (err) => {
        console.log(err);
      });
  }
}
