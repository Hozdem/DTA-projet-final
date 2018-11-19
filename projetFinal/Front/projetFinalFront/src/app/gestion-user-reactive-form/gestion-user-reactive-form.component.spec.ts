import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUserReactiveFormComponent } from './gestion-user-reactive-form.component';

describe('GestionUserReactiveFormComponent', () => {
  let component: GestionUserReactiveFormComponent;
  let fixture: ComponentFixture<GestionUserReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionUserReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUserReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
