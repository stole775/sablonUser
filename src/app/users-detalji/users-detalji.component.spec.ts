import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetaljiComponent } from './users-detalji.component';

describe('UsersDetaljiComponent', () => {
  let component: UsersDetaljiComponent;
  let fixture: ComponentFixture<UsersDetaljiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersDetaljiComponent]
    });
    fixture = TestBed.createComponent(UsersDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
