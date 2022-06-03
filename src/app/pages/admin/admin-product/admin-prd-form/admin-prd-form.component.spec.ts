import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrdFormComponent } from './admin-prd-form.component';

describe('AdminPrdFormComponent', () => {
  let component: AdminPrdFormComponent;
  let fixture: ComponentFixture<AdminPrdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPrdFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
