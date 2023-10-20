import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMailDuplicadoComponent } from './alert-mail-duplicado.component';

describe('AlertMailDuplicadoComponent', () => {
  let component: AlertMailDuplicadoComponent;
  let fixture: ComponentFixture<AlertMailDuplicadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertMailDuplicadoComponent]
    });
    fixture = TestBed.createComponent(AlertMailDuplicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
