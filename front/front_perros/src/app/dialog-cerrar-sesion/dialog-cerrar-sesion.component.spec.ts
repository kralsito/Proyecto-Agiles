import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCerrarSesionComponent } from './dialog-cerrar-sesion.component';

describe('DialogCerrarSesionComponent', () => {
  let component: DialogCerrarSesionComponent;
  let fixture: ComponentFixture<DialogCerrarSesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCerrarSesionComponent]
    });
    fixture = TestBed.createComponent(DialogCerrarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
