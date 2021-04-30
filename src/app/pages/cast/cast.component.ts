import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {

  constructor() { }

  @Input() cast: CastComponent

  ngOnInit(): void {
    console.log('INIT CAST')
    console.log(this.cast)
  }

}
