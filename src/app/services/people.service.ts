import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from '../models/people.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private baseUrl = 'https://swapi.py4e.com/api/people/';  // Backend people
  constructor(private http: HttpClient) { }

  getPeople(id: number): Observable<People> {
    return this.http.get<People>(`${this.baseUrl}/${id}`);
  }

}
