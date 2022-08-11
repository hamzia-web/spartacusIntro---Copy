import { Component, Input, OnInit } from '@angular/core';
import { FRUITS } from '../contactus/contactus.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  @Input() fruits = FRUITS;
  @Input('master') masterName = '';

  name: String = "Hamid"
}
