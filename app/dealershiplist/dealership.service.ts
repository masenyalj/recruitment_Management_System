import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from '../../environments/environment';

@Injectable()

export class DealershipService {

  constructor(private http: Http) {  }

  dealershiplist = ['name','address','street'];
  Datap:string = 'None';
   
  dealerdata(){

     return this.Datap;
     // this.http.get('http://localhost:54663/api/Dealerships');
     // return this.http.request('http://localhost:54663/api/Dealerships');

  }
  public SetDealer(datap:string):void
  {
       this.Datap = datap;
  }
  

}
