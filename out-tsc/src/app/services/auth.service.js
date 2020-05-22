import { __decorate, __metadata } from "tslib";
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
let AuthService = class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = "http://192.168.43.145:5000/";
    }
    login(credentials) {
        credentials['type'] = 'login';
        return this.httpClient.post(this.url.concat("api/authenticate"), JSON.stringify(credentials))
            .pipe(map(response => {
            let result = response;
            console.log(result);
            console.log(result['token']);
            if (result && result['token']) {
                localStorage.setItem('token', result['token']);
                console.log("=====>>", this.currentUser());
                return true;
            }
            else {
                return false;
            }
        }));
    }
    logout() {
        localStorage.removeItem('token');
    }
    isLoggedIn() {
        console.log(tokenNotExpired('token'));
        return tokenNotExpired('token');
    }
    currentUser() {
        let token = localStorage.getItem('token');
        if (!token)
            return null;
        return new JwtHelper().decodeToken(token);
    }
};
AuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.HttpClient)); }, token: AuthService, providedIn: "root" });
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map