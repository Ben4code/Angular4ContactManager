import { Injectable } from '@angular/core';
import { Observable }  from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
//   users:string[];
//   data: Observable<Array<number>>;

//   constructor() {
//    // this.users = ['Ben', 'John', 'Mike', 'Luke'];
//    }

//    getUsers(){
//      return this.users;
//    }

//    getData(){
//      this.data = new Observable(function(observer){
//         setTimeout(function (){
//             observer.next(1);
//         },1000);

//         setTimeout(function (){
//             observer.next(2);
//         },2000);

//         setTimeout(function (){
//             observer.next(3);
//         },3000);

//         setTimeout(function (){
//             observer.complete();
//         },4000);
//      });
//       return this.data;  
//    }
    constructor (public http:Http){}


    getUsers(){
        return this.http.get('http://jsonplaceholder.typicode.com/users').map(res => res.json());
    }

    addUser(user){
        return this.http.post('http://jsonplaceholder.typicode.com/users', user).map(res => res.json());
    }

    deleteUser(id){
        return this.http.delete('http://jsonplaceholder.typicode.com/users/'+id).map(res =>res.json());
    }

    updateUser(user){
        return this.http.put('http://jsonplaceholder.typicode.com/user/' + user.id, user).map(res => res.json());
        
    }
}
 