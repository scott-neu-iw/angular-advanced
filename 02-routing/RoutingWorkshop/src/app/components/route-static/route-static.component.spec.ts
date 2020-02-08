import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteStaticComponent } from './route-static.component';

describe('RouteStaticComponent', () => {
  let component: RouteStaticComponent;
  let fixture: ComponentFixture<RouteStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
