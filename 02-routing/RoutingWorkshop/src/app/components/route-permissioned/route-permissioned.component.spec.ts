import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePermissionedComponent } from './route-permissioned.component';

describe('RoutePermissionedComponent', () => {
  let component: RoutePermissionedComponent;
  let fixture: ComponentFixture<RoutePermissionedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutePermissionedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutePermissionedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
