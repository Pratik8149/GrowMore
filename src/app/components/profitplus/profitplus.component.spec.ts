import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitplusComponent } from './profitplus.component';

describe('ProfitplusComponent', () => {
  let component: ProfitplusComponent;
  let fixture: ComponentFixture<ProfitplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitplusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
