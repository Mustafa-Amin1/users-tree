import { Component, Input, OnInit } from '@angular/core';
// import { User } from './userModel.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }
  @Input() userObj: any ;

  ngOnInit(): void {
    // console.log(this.userData)
  }

}
