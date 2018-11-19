import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationReactiveFormComponent } from './administration-reactive-form.component';

describe('AdministrationReactiveFormComponent', () => {
  let component: AdministrationReactiveFormComponent;
  let fixture: ComponentFixture<AdministrationReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
