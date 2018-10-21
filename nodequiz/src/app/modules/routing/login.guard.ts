import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { APIService } from "../../services/API/api-service.service";

@Injectable({
    providedIn: 'root',
})
export class LoginGuard implements CanActivate {

    constructor(
        private router: Router,
        public api: APIService

    ) { }

    canActivate() {
        console.log(this.api.isLoggedIn());
        if (!this.api.isLoggedIn()) {
            alert("You're not logged in and will be redirected to Login page");
            this.router.navigate(["/login"]);
        }
        return true;
    }
}