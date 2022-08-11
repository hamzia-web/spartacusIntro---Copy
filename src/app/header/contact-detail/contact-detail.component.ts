import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {SubscribeService} from '../../../services/subscribe.service';
import {UserModel} from '../../../services/models/UserModel';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  public userId: number;
  public selectedUser: UserModel
  public queryParamName: any;
  constructor(private activatedRoute: ActivatedRoute, private subscribeService: SubscribeService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap) =>{
      this.userId = Number(param.get('id'))
    })

    this.subscribeService.getAllUsers().subscribe((data) => {
      let allUsers: UserModel[] = data;
      this.selectedUser = allUsers.find(user => user.id = this.userId)
      })
    // Read the query param from URL : http://localhost:4400/#/subscribe/1?name=Hamid
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.queryParamName = param.get('name');
      console.log(this.queryParamName);
    })
  }
}
