import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilOtroComponent } from './perfil-otro.component';

describe('PerfilOtroComponent', () => {
  let component: PerfilOtroComponent;
  let fixture: ComponentFixture<PerfilOtroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilOtroComponent]
    });
    fixture = TestBed.createComponent(PerfilOtroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
