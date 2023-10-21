import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCredencialesInvalidasComponent } from './alert-credenciales-invalidas.component';

describe('AlertCredencialesInvalidasComponent', () => {
  let component: AlertCredencialesInvalidasComponent;
  let fixture: ComponentFixture<AlertCredencialesInvalidasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertCredencialesInvalidasComponent]
    });
    fixture = TestBed.createComponent(AlertCredencialesInvalidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
