import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPrdListComponent } from './admin-prd-list.component';

describe('AdminPrdListComponent', () => {
  let component: AdminPrdListComponent;
  let fixture: ComponentFixture<AdminPrdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPrdListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPrdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
