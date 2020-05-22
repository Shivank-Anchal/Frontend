import { __decorate, __metadata } from "tslib";
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
let AuthGuard = class AuthGuard {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    canActivate(route, state) {
        if (this.authService.isLoggedIn())
            return true;
        this.router.navigate(['/login'], {
            queryParams: {
                returnUrl: state.url
            }
        });
        return false;
    }
};
AuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i2.ActivatedRoute)); }, token: AuthGuard, providedIn: "root" });
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [AuthService,
        Router,
        ActivatedRoute])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth-guard.service.js.map