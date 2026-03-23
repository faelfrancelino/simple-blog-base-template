import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPostFormDialog } from './dashboard-post-form-dialog';

describe('DashboardPostFormDialog', () => {
  let component: DashboardPostFormDialog;
  let fixture: ComponentFixture<DashboardPostFormDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPostFormDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPostFormDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
