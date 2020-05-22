import { __decorate, __metadata } from "tslib";
import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [AuthService])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map