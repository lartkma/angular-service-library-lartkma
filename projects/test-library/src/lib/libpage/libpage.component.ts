import { Component, OnInit } from '@angular/core';
import { ExternalService } from '../external.service';

@Component({
  selector: 'lib-libpage',
  templateUrl: './libpage.component.html',
  styleUrls: ['./libpage.component.css']
})
export class LibPageComponent implements OnInit {
  loadedStatus = 'no';

  constructor(private external : ExternalService) { }

  ngOnInit(): void {
    this.external.callService().subscribe(data => {
      this.loadedStatus = 'yes'
    })
  }

}
