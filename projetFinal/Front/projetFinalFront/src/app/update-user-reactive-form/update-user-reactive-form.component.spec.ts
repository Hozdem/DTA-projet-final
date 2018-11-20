import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserReactiveFormComponent } from './update-user-reactive-form.component';

describe('UpdateUserReactiveFormComponent', () => {
  let component: UpdateUserReactiveFormComponent;
  let fixture: ComponentFixture<UpdateUserReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
