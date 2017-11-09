import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ApiServiceService {

  constructor(private _http: Http) { }

  getGithubInfo(username, callback) {//try .HTTP instead@@@
    this._http.get(`https://api.github.com/users/${username}`).subscribe(
      (response) => {
        callback(response.json());
      },
      (error)=> { console.log(error);}
    );
    // console.log("@@@", username);
  }
  // getGithubInfo(callback) {
  //   this._http.get('/tasks').subscribe( 
  //     (response)=> { 
  //       this.tasks = response.json();
  //       callback(this.tasks);
  //     }, 
  //     (error)=> { console.log(error); }
  //   );
  // }

}
