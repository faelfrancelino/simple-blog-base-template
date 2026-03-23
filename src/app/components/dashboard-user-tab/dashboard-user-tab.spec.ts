import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserTab } from './dashboard-user-tab';

describe('DashboardUserTab', () => {
  let component: DashboardUserTab;
  let fixture: ComponentFixture<DashboardUserTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserTab],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardUserTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
