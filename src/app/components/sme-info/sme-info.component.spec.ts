import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMEInfoComponent } from './sme-info.component';

describe('SMEInfoComponent', () => {
  let component: SMEInfoComponent;
  let fixture: ComponentFixture<SMEInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMEInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMEInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
