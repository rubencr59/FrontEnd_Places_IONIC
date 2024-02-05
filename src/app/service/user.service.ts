import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private actualUser: User;
    
  private users: User[] = [];

  private usersObservable: Subject<User[]>;

  constructor() { 
    this.users.push(new User('admin', 'admin'));

    this.usersObservable = new Subject<User[]>();
  }


  getUsersObservable(): Observable<User[]>{
    return this.usersObservable.asObservable();
  }


  addUser(name: string, password: string){

     if(this.users.push(new User(name, password)) > 0){
        this.usersObservable.next(this.users);
     };
  }

  removeUser(userId: number){
    this.users.forEach((eachuser, index) => {
      if(eachuser.getId() == userId){
        this.users.splice(index, 1);
        this.usersObservable.next(this.users);
      }
    });
  }

  getUserByName(name: string): User{
    this.users.forEach(eachuser => {
      if(eachuser.getName() == name){
        return eachuser;
      }
    });

      return null;
    }
  
  getUserByNameAndPassword(name: string, password: string): User{
    this.users.forEach(eachuser => {
      if(eachuser.getName() == name && eachuser.getPassword() == password){
        return eachuser;
      }
    });

    return null;
  }


  getUserById(id: number): User {
    return this.users.find(user => user.getId() === id) || null;
  }

  getActualUser(): User{
      return this.actualUser;
  }

  setActualUser(user: User){
      this.actualUser = user;
  }

}
