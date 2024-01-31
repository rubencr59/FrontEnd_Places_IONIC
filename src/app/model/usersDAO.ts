import { User } from "./user.model";

export class UserDAO{

    private static idUser: number = 0;

    private static users: User[] = [
        new User("admin", "admin")
    ];

    public addUser(name: string, password: string): boolean{

        if(UserDAO.users.push(new User(name, password))){
            return true;
        
        }else{
            return false;
        }

    }

    public getUserByName(name: string): User{

        for(let i = 0; i < UserDAO.users.length; i++){

            if(UserDAO.users[i].getName() === name){

                return UserDAO.users[i];

            }

        }

        return null;

    }

    public getUserById(id: number): User{

        for(let i = 0; i < UserDAO.users.length; i++){

            if(UserDAO.users[i].getId() === id){

                return UserDAO.users[i];

            }

        }

        return null;

    }

    public getUserByNameAndPassword(name: string, password: string): User{

        for(let i = 0; i < UserDAO.users.length; i++){

            if(UserDAO.users[i].getName() === name && UserDAO.users[i].getPassword() === password){

                return UserDAO.users[i];

            }

        }

        return null;

    }

    public getUsers(): User[]{

        return UserDAO.users;

    }
}