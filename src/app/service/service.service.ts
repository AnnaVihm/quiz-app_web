import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  urlBase = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  questoes ():Observable<any> {
    return this.http.get(`${this.urlBase}/quiz`);
  }

  responder (id:number,body):Observable<any> {
    return this.http.put(`${this.urlBase}/quiz/${id}`, body);
  }

  respondidas (body):Observable<any> {
    return this.http.post(`${this.urlBase}/respondidas`, body);
  }

  saveranking (body):Observable<any> {
    return this.http.post(`${this.urlBase}/ranking`, body);
  }
  ranking ():Observable<any> {
    return this.http.get(`${this.urlBase}/ranking`);
  }
}
