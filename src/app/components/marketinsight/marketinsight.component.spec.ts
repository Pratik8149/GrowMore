import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketinsightComponent } from './marketinsight.component';

describe('MarketinsightComponent', () => {
  let component: MarketinsightComponent;
  let fixture: ComponentFixture<MarketinsightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketinsightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketinsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
