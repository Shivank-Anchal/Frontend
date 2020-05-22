import { __decorate } from "tslib";
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AuthService } from './services/auth.service';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule } from '@angular/forms';
const appRoutes = [
    { path: '', component: HomeComponent },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminAuthGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: 'no-access', component: NoAccessComponent },
    { path: 'logout', component: LogoutComponent },
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HomeComponent,
            AdminComponent,
            NoAccessComponent,
            LoginComponent,
            LogoutComponent
        ],
        imports: [
            BrowserModule,
            RouterModule.forRoot(appRoutes),
            RouterModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            MaterialModule,
            FormsModule,
            HttpClientModule
        ],
        providers: [RouterModule,
            AuthService,
            AuthGuard,
            AdminAuthGuard],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map