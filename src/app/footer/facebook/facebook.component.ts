import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit 
{
  constructor() { }
  ngOnInit(): void {
  }
 
  element=document.documentElement
  fullScreen(){
    console.log("Full Screen", this.element.requestFullscreen.name);
    if(this.element.requestFullscreen)
     this.element.requestFullscreen()
  }

  exitFullScreen(){
    console.log("Exit Full screen", document.exitFullscreen); 
     if(document.exitFullscreen)
        document.exitFullscreen();
  }
}
