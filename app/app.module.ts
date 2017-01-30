import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import {GithubComponent} from './components/github.component';

import {GithubService} from './services/github.service';
@NgModule({
  imports:      [ BrowserModule,HttpModule],
  declarations: [ AppComponent, GithubComponent],
  bootstrap:    [ AppComponent ],
  providers:[GithubService]
})
export class AppModule { }
