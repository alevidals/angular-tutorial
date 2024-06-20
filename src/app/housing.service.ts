import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) {}

  getAllHousingLocations(): Observable<HousingLocation[]> {
    const data = this.http.get<HousingLocation[]>(this.url);
    return data;
  }

  getHousingLocationById(id: number): Observable<HousingLocation | undefined> {
    const data = this.http.get<HousingLocation | undefined>(
      `${this.url}/${id}`
    );

    return data;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
