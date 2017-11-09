import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiServiceService } from './../api-service.service';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GithubComponent implements OnInit {
  username;
  userInfo;
  followers;
  repos;
  score;
  constructor(private _apiService: ApiServiceService) { }

  ngOnInit() {
  }

  searchGithub() {
    this._apiService.getGithubInfo(this.username, (data) => {
      this.followers = data.followers;
      this.repos = data.public_repos;
      this.score = this.followers + this.repos;
      // console.log(this.score);
    });
  }

}
