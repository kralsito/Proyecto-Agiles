import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarNoLogueadoComponent } from './nav-bar-no-logueado.component';

describe('NavBarNoLogueadoComponent', () => {
  let component: NavBarNoLogueadoComponent;
  let fixture: ComponentFixture<NavBarNoLogueadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarNoLogueadoComponent]
    });
    fixture = TestBed.createComponent(NavBarNoLogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
