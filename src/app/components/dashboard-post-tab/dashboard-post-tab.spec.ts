import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPostTab } from './dashboard-post-tab';

describe('DashboardPostTab', () => {
  let component: DashboardPostTab;
  let fixture: ComponentFixture<DashboardPostTab>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPostTab],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPostTab);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
