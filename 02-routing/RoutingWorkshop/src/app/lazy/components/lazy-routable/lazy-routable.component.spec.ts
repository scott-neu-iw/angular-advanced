import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyRoutableComponent } from './lazy-routable.component';

describe('LazyRoutableComponent', () => {
  let component: LazyRoutableComponent;
  let fixture: ComponentFixture<LazyRoutableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyRoutableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyRoutableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
