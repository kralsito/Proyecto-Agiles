import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroComponent } from './perro.component';

describe('PerroComponent', () => {
  let component: PerroComponent;
  let fixture: ComponentFixture<PerroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerroComponent]
    });
    fixture = TestBed.createComponent(PerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
