import { Injectable } from '@angular/core';
import { UserDAO } from '../model/usersDAO';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userDAO: UserDAO;

    

  constructor() {
    this.userDAO = new UserDAO();
  }

  addUser(name: string, password: string): boolean{

    return this.userDAO.addUser(name, password);
  }


  getUserByName(name: string): User{
      return this.userDAO.getUserByName(name);
  }
  


  getUserByNameAndPassword(name: string, password: string): User{
      return this.userDAO.getUserByNameAndPassword(name, password);
  }

  getUserById(id: number): User{
      return this.userDAO.getUserById(id);
  }

}
