import { __decorate, __metadata } from "tslib";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./auth.service";
let AdminAuthGuard = class AdminAuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate() {
        if (this.authService.isLoggedIn() && this.authService.currentUser()['admin'])
            return true;
        this.router.navigate(['/no-access']);
        return false;
    }
};
AdminAuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function AdminAuthGuard_Factory() { return new AdminAuthGuard(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.AuthService)); }, token: AdminAuthGuard, providedIn: "root" });
AdminAuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [Router,
        AuthService])
], AdminAuthGuard);
export { AdminAuthGuard };
//# sourceMappingURL=admin-auth-guard.service.js.map