import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputQrComponent } from './input-qr.component';

describe('InputQrComponent', () => {
  let component: InputQrComponent;
  let fixture: ComponentFixture<InputQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
