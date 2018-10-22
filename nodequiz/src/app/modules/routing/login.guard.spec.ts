import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { imports } from '../../services/Util/util.imports';
import { declarations } from '../../services/Util/util.imports';
import { providers } from '../../services/Util/util.imports';

import { LoginGuard } from "./login.guard";
import { APIService } from '../../services/API/api-service.service';


describe('LoginGuard', () => {
    let loginGuard: LoginGuard;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [declarations],
            imports: [imports],
            providers: [LoginGuard, providers]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        loginGuard = TestBed.get(LoginGuard);
    });

    it('should create', () => {
        expect(loginGuard).toBeTruthy();
    });

    it('canActivate() should not allow navigation if user is not logged in', () => {
        expect(loginGuard.canActivate()).toBeFalsy();
    });

});