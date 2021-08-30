import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lib-libpage',
  templateUrl: './libpage.component.html',
  styleUrls: ['./libpage.component.css']
})
export class LibPageComponent implements OnInit {
  loadedStatus = 'no';

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => {
      this.loadedStatus = 'yes'
    })
  }

}
