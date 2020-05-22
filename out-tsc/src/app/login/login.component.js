import { __decorate, __metadata } from "tslib";
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
let LoginComponent = class LoginComponent {
    constructor(authService, route, router) {
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    signIn(credentials) {
        this.authService.login(credentials)
            .subscribe(result => {
            if (result) {
                let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
                this.router.navigate([returnUrl || '/']);
            }
            else
                this.invalidLogin = true;
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [AuthService,
        ActivatedRoute,
        Router])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map