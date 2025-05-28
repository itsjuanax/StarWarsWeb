import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films } from '../models/films.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private baseUrl = 'https://swapi.py4e.com/api/films/1/';  // Backend films
  constructor(private http: HttpClient) { }

  getFilms(id: number): Observable<Films> {
    return this.http.get<Films>(`${this.baseUrl}/${id}`);
  }
}