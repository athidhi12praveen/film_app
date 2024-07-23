import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  // api call to get film list

  getFilms(){
    return this.http.get(`/assets/film.json`)
  }
}





  