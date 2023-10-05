import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloYEsloganComponent } from './titulo-yeslogan.component';

describe('TituloYEsloganComponent', () => {
  let component: TituloYEsloganComponent;
  let fixture: ComponentFixture<TituloYEsloganComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloYEsloganComponent]
    });
    fixture = TestBed.createComponent(TituloYEsloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
