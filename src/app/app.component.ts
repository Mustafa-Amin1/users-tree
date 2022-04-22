import { Component } from '@angular/core';
import  data from '../assets/data/users.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'qsource-task';
  usersList :any= data.users;
  modifiedUsersList:any = [];
  ngOnInit(): void { 
    console.log(this.usersList)
    // arrange users tree
    let usersArr = this.usersList
    usersArr.map(function(user:any){
      if(user.code.indexOf('.') == - 1) {
          let userId = user.code
          user.id= userId
      }else {
          let userId = user.code.split('.')
          user.id= userId[userId.length-1]
          user.parent_id= userId[userId.length-2]
      }
      return usersArr;

  });
  //make nested Tree
  let tempObj:any = {},tempArr = []; // result in r
  usersArr.forEach((x: { id: string | number; children: never[]; }) => (tempObj[x.id] = x, x.children = []));
  usersArr.forEach((x: { parent_id: string | number; }) => x.parent_id ? tempObj[x.parent_id].children.push(x) : tempArr.push(x));
  
  this.modifiedUsersList = usersArr


  }
  
   
  
}
