import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiUrl = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class SmartlockerService {

  headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) { }

  private executeQuery<T>(endpoint: string, signal: string) {
    console.log('HTTP Request.'); 
    this.http.post<T>(apiUrl + endpoint,
      { signal },
      {}).subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  sendSignal(endpoint: string, signal: string) {
    this.executeQuery<any>(endpoint, signal);
  }
}
