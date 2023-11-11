import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisFavoritosComponent } from './mis-favoritos.component';

describe('MisFavoritosComponent', () => {
  let component: MisFavoritosComponent;
  let fixture: ComponentFixture<MisFavoritosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisFavoritosComponent]
    });
    fixture = TestBed.createComponent(MisFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
