import { error } from '@angular/compiler/src/util';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserModel } from 'src/services/models/UserModel';
import { SubscribeService } from "src/services/subscribe.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  //providers:[SubscribeService]
})
export class ContactComponent implements OnInit
 {
  public users: UserModel[] = [] as UserModel[]
  public user: UserModel = undefined;
  //public users$: Observable<UserModel[]>
  public errorMessage: string | undefined = undefined
  public errorPostMessage: any | string | undefined = undefined;
  public errorUpdateMessage: any | string | undefined = undefined;

  constructor(@Inject(SubscribeService) private subscribeService: SubscribeService )
  {
    console.log("Contact Component Constructor");
  }

  subscribeForm = new FormGroup({ // this(FormGroup) will control form
    firstName: new FormControl("", Validators.required), // this(FormControl) will control form field
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
  })

  ngOnInit(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        // handle the response
        console.log("fetch method response:" + response.text)
    })
    .catch(error => {
        // handle the error
        console.error(`fetch method error: ${error}`)
    });
  }

  isFormSubmitted: boolean = false;

  /**
   * How a component will receive data from Services, if we subscribe to the service
   * @returns
   */
  subscribeNewsLetter(){
    this.isFormSubmitted = true;
    // stop here if form is invalid
    if (this.subscribeForm.invalid) {
      return;
   }
    console.log(`Contact Component---- First Name: ${this.subscribeForm.value.firstName} Last Name: ${this.subscribeForm.value.lastName} Email: ${ this.subscribeForm.value.email}`);
    this.subscribeService.subscribeNewsLetter(this.subscribeForm.value)
         .subscribe((result) => {
          console.log(`Result: ${result}`)
          if(result === 'success')
          {
            // sending email can be handled from backend as well.
             this.triggerEmail(this.subscribeForm.value.firstName, this.subscribeForm.value.lastName, this.subscribeForm.value.email);
          }
    },
       (error) => {
        this.errorPostMessage = error
        console.log(`Error:, ${error}`);
    })
  }

  // This firstName() will be used for showing error message in html
  get firstName()
  {
    return this.subscribeForm.get("firstName")
  }
  // This lastName() will be used for showing error message in html
  get lastName()
  {
    return this.subscribeForm.get("lastName")
  }
  get email()
  {
    return this.subscribeForm.get("email")
  }

  getUsers()
  {
    // The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted.
    //When a new value is emitted, the async pipe marks the component to be checked for changes.
    //this.users$ = this.subscribeService.getAllUsers()
    this.subscribeService.getAllUsers()
      .subscribe((data) => {
        this.users = data
      }, (error) => {
        this.errorMessage = error;
        console.log(`Error in getUsers() ${error}`);
      })
  }

  updateUser(){
    this.subscribeService.updateUser().subscribe(data => {
      this.user = data;
    },
    (error) => {
       this.errorUpdateMessage = error,
       console.log(`Error in error updateUser() ${error}`);
    });
  }

  private triggerEmail(firstName: any, lastName: any, email: any)
  {
    console.log("Sending Email with form captured data");
    console.log(`FirstName: ${firstName}--LastName: ${lastName}--Email: ${email}`);
  }
}


