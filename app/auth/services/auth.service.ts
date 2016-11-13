import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import {User} from "../../core/user";
import {BASE_API_URL} from "../../core/core.module";

@Injectable()
export class AuthService{
    isLoggedIn: boolean = false;
    isSuccess: boolean = false;
    users: User[];
    headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http : Http){}
    
    login(user : User): Observable<boolean>{
        return this.http.post(BASE_API_URL + "user/login", user)
            .map(response => response.json() as User)
            .map(user => {
                if(User.isNull(user)){
                    this.isLoggedIn = false;
                    return false;
                }else {
                    this.isLoggedIn = true;
                    return true;
                }
            })

    }

    register(user : User): Observable<boolean>{
        return this.http.post(BASE_API_URL + "user/", user)
            .map(response => response.json() as User)
            .map(user => {
                if(User.isNull(user)){
                    this.isSuccess = false;
                    return false;
                }else {
                    this.isSuccess = true;
                    return true;
                }
            })
    }

    updateUser(user : User): Observable<boolean>{
        return this.http.put(BASE_API_URL + "user/", user)
            .map(response => response.json() as User)
            .map(user => {
                if(User.isNull(user)){
                    this.isSuccess = false;
                    return false;
                }else {
                    this.isSuccess = true;
                    return true;
                }
            })
    }

    logOut(): Observable<boolean> {
        this.isLoggedIn = !this.isLoggedIn;
        return Observable.of(false);
    }

    getUsers(): Observable<User[]>{
        return this.http.get(BASE_API_URL + "user/")
            .map(response => response.json() as User[])
            .map(users => this.users = users)
    }

    deleteUser(userId : string) : Observable<boolean>{
        // const url = `${BASE_API_URL}+"user/"${userId}`;
        return this.http.delete(BASE_API_URL + "user/" + userId)
            .map(response => response.json() as boolean)
            .map(flag => {
                this.isSuccess = flag;
                return flag;
            })
    }

    // getUsers(): Promise<User[]>{
    //     return Promise.resolve(USERINFOS);
    // }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}