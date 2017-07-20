import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: 'sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  name:string = "";
  age:number = 23;
  notifier:string = '';
  output:string = "Its morning";
  value2:boolean = false;
  myAge = new Date(1989,6,19);
  Amount = 500;
  people = ['Ben', 'Jack', 'John', 'Jane'];
  people2 = [
    {
    firstname: 'Ben',
    lastname: 'Obioha'
    },
    {
    firstname: 'Ife',
    lastname: 'Obi'
    },
    {
    firstname: 'Harry',
    lastname: 'Doe'
    }
];

  user = {
    name:'',
    email:'',
    phone:''
  }

  constructor(){
    
  }
  ngOnInit() {
  }
  // changeText(){
  //   this.value = !this.value;
  // }
  eventType(e){
    console.log(e.type);
  }
  pulate(){
    this.people.push(this.name);
    this.value2 = true;
    this.notifier = this.name;
    this.name = ''; 
  }

  onSubmit({value, valid}){
    if(valid){
      console.log(value);
    }else{
      console.log('An error occured.');
    }
    // (valid)? console.log(value3): console.log('An error occured.');
  }
}
