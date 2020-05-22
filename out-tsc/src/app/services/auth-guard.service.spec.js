import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth-guard.service';
describe('AuthGuardService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthGuard);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-guard.service.spec.js.map