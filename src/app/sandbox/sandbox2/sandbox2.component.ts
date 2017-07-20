import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-sandbox2',
  templateUrl: './sandbox2.component.html',
  styleUrls: ['./sandbox2.component.css']
})


export class Sandbox2Component implements OnInit {
  //users:string[];
  data:any[] = [];

  // constructor( public ds:DataService) {

  //   this.users = this.ds.getUsers();
  //  }

    //constructor(public ds2:DataService){this.ds2.getData().subscribe(data =>{console.log(data);});}
    isEdit:boolean = false; 
    users:any[];
    user = {
      id: '',
      name: '',
      email: '',
      phone: ''
    }

    constructor (public ds:DataService){
      this.ds.getUsers().subscribe(users =>{
        //console.log(users);
        this.users = users;
      });
    }

     onSubmit(isEdit){
        if(isEdit){
          this.ds.updateUser(this.user).subscribe(user => {
            for(let i = 0; i < this.users.length; i++){
              if(this.users[i].id == this.user.id){
                this.users.splice(i,1);
              }
            }
            this.users.unshift(this.user);
           
          });  
        }else{
            this.ds.addUser(this.user).subscribe(user=>{
            console.log(user);
            this.users.unshift(user)});
        }
      }

      onDelete(id){
        this.ds.deleteUser(id).subscribe(user=>{
          for(let i = 0; i < this.users.length; i++ ){
            if(this.users[i].id == id){
              this.users.splice(i,1);
            }
          }
        });
      }

      onEdit(user){
      return this.user = user;
      }

  ngOnInit() {
  }

}
