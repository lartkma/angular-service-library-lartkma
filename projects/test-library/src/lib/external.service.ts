import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExternalService {

  constructor(private http : HttpClient) { }

  callService() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
