import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFocusComponent } from './btn-focus.component';

describe('BtnFocusComponent', () => {
  let component: BtnFocusComponent;
  let fixture: ComponentFixture<BtnFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
