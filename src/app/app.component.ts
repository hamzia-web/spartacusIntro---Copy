import { Component } from '@angular/core';
import { SubscribeService } from 'src/services/subscribe.service';
import {HashLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spartacusIntro';
  constructor(){
    // if we comment {//  providedIn: 'root'//} in SubscribeService, then that service can't be used in the other component
    //console.log(subscribeService.getAllUsers());// NullInjectorError: No provider for SubscribeService!
  }

  image:string = "assets/images/favicon.ico"
  image_SAP:string = "assets/images/SAP.png"

  showOutlet()
  {
     console.log("Show outlet")
  }
  hideOutlet()
  {
    console.log("Hide outlet")
  }

isShown = false ; // hidden by default
toggleShow() {
  console.log("Type of isShown variable:" + typeof(this.isShown))
   this.isShown = ! this.isShown;
}
}
