import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormusuarioComponent } from './formusuario.component';

describe('FormusuarioComponent', () => {
  let component: FormusuarioComponent;
  let fixture: ComponentFixture<FormusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormusuarioComponent]
    });
    fixture = TestBed.createComponent(FormusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
