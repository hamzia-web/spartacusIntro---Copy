import { Component, HostListener, OnInit } from '@angular/core';

export const FRUITS = [
  {name: 'Mango'},
  {name: 'Apple'},
  {name: 'Grapes'}
];

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})

export class ContactusComponent implements OnInit {

  
  fruits = FRUITS; 
  master = 'Master';

  @HostListener('mouseenter') onMouseEnter() {
    alert("Don't touch my bacon!");
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}


