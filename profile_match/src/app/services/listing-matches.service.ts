import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { IProfileList } from '../Interface/listing-matches';
@Injectable({
  providedIn: 'root'
})
export class ListingMatchesService {

  url = './assets/profile.json';
  constructor(private http: HttpClient) {
   }

  public getProfileInfo(): Observable<IProfileList> {
    return this.http.get<IProfileList>(this.url);
  }
}
