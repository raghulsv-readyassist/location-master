import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Map } from './map.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public polycoords = new BehaviorSubject<any>([]);
  currentcoords = this.polycoords.asObservable();
  formdata:Map;
  readonly rootURL ="http://[::1]:3000/locationmasters"
  

  constructor(public http : HttpClient) {
    this.formdata = {
      geocoords: "",
      name:"",
      shortcode:""

    }
   }

  postmap(formdata : Map){
    console.log(formdata)
    
   return this.http.post(this.rootURL,formdata);
    
  }

  changeCoords(coordsval: Array<any>) {
    this.polycoords.next(coordsval);
    let json= JSON.stringify(coordsval);
    this.formdata.geocoords = json
    
  }
  

  
}
