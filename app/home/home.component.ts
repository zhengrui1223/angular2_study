import {Component, OnInit} from "@angular/core";
import {AuthService} from "../auth/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../core/user";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
    users: User[];
    userColumns : Object[];
    model : User;
    countries = [
        "cn",
        "en",
        "kr"
    ];
    title : string;
    deleteUserId : string;

    constructor(private router: Router,
                private authService: AuthService) {}

    ngOnInit():void {
        
        this.userColumns = [
            /*{field: 'id', name: 'id'},*/
            {field: 'name', name: '姓名'},
            {field: 'email', name: '邮箱'},
            {field: 'passWord', name: '密码'},
            {field: 'country', name: '国家'}
        ];
        this.getUsers();
    }

    clearUser() : void{
        this.title = "新增/用户";
        this.model = {
            id: "",
            name: "",
            email: "",
            passWord : "",
            country : "",
            token : "",
            tokenCreateDate : ""
        };
    }

    addUser(): void{
        // alert(JSON.stringify(this.model));
        if(this.model.id != null && this.model.id != ""){
            this.authService
                .updateUser(this.model)
                .subscribe(isSuccess => {
                    if(isSuccess){
                        document.getElementById("userModelClose").click();
                        // $("#userModelClose").click();
                        this.getUsers();
                        this.router.navigate(['/home']);
                    }
                });
        }else {
            this.authService
                .register(this.model)
                .subscribe(isSuccess => {
                    if(isSuccess){
                        document.getElementById("userModelClose").click();
                        // $("#userModelClose").click();
                        this.getUsers();
                        this.router.navigate(['/home']);
                    }
                });
        }
    }

    getUsers(): void{
        this.authService.getUsers()
            .subscribe(users => this.users = users)
    }

    queryUser(user : User): void{
        this.title = "修改/用户";
        this.model = user;
        // alert(JSON.stringify(this.model));
    }

    recordDeleteUser(user : User): void{
        this.deleteUserId = user.id;
    }

    deleteUser(): void{
        document.getElementById("userDeleteModelClose").click();
        this.authService
            .deleteUser(this.deleteUserId)
            .subscribe(isSuccess => {
                if(isSuccess){
                    this.getUsers();
                    this.router.navigate(['/home']);
                }else {
                    alert("删除用户失败");
                }
            });
    }

    logOut(): void {
        this.authService.logOut().subscribe(isLoggedIn => {
            if( isLoggedIn === false) {
                this.router.navigate(['/auth']);
            }
        })
    }
}