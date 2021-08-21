import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideClientComponent } from './side-client.component';

describe('SideClientComponent', () => {
  let component: SideClientComponent;
  let fixture: ComponentFixture<SideClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
