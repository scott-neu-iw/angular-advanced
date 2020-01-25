import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutableParentComponent } from './routable-parent.component';

describe('RoutableParentComponent', () => {
  let component: RoutableParentComponent;
  let fixture: ComponentFixture<RoutableParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutableParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutableParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
