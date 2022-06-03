import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrdDetailComponent } from './admin-prd-detail.component';

describe('AdminPrdDetailComponent', () => {
  let component: AdminPrdDetailComponent;
  let fixture: ComponentFixture<AdminPrdDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPrdDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
