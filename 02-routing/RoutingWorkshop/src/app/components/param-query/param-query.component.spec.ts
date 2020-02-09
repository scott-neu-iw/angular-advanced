import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamQueryComponent } from './param-query.component';

describe('ParamQueryComponent', () => {
  let component: ParamQueryComponent;
  let fixture: ComponentFixture<ParamQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
