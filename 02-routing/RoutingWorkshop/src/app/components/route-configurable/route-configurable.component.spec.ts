import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteConfigurableComponent } from './route-configurable.component';

describe('RouteConfigurableComponent', () => {
  let component: RouteConfigurableComponent;
  let fixture: ComponentFixture<RouteConfigurableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteConfigurableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteConfigurableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
