import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const MaterialComponenets = [
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
];
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    NgModule({
        imports: [MaterialComponenets],
        exports: [MaterialComponenets],
    })
], MaterialModule);
export { MaterialModule };
//# sourceMappingURL=material.module.js.map