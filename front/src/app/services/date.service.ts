import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  apiURL:string = 'http://localhost:8000/api/';

  httpHeaders: any = {
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    }
  }

  constructor(public http: HttpClient) {}

  sendDates(form): Observable <any> {
    return this.http.post( this.apiURL + 'date', form, this.httpHeaders );
  }

  getDate(id): Observable <any> {
    return this.http.get( this.apiURL + 'dates/' + id);
  }

  getHoliday(id): Observable <any> {
    return this.http.get( this.apiURL + 'holiday/' + id);
  }
}
