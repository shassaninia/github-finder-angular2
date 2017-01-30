import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

    constructor(private _http: Http){
        console.log('GithubService initialized...')
    }

     testService(){
         console.log("testService() called...");
    }
}