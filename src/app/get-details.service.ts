import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anime } from './anime';

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {

  constructor(private http: HttpClient) {  }


  getTop15Character() {
    return this.http.get<Anime>('https://api.jikan.moe/v4/characters?page=0&limit=15&q=&order_by=favorites&sort=desc');
  }

  getNameMatchingCharacter(name: any, p : number) {
    console.log(name);
    return this.http.get<Anime>(`https://api.jikan.moe/v4/characters?page=${p}&limit=148796&q=${name}&order_by=favorites&sort=desc`)
  }

}
