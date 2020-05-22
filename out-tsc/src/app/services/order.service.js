import { __decorate, __metadata } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthHttp } from 'angular2-jwt';
import * as i0 from "@angular/core";
import * as i1 from "angular2-jwt";
import * as i2 from "@angular/common/http";
let OrderService = class OrderService {
    constructor(httpClient, http) {
        this.httpClient = httpClient;
        this.http = http;
    }
    getOrders() {
        return this.httpClient.get('/api/orders')
            .pipe(map(response => response));
    }
};
OrderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderService_Factory() { return new OrderService(i0.ɵɵinject(i1.AuthHttp), i0.ɵɵinject(i2.HttpClient)); }, token: OrderService, providedIn: "root" });
OrderService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [AuthHttp,
        HttpClient])
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map