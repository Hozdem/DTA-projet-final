import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionReactiveFormComponent } from './connexion-reactive-form.component';

describe('ConnexionReactiveFormComponent', () => {
  let component: ConnexionReactiveFormComponent;
  let fixture: ComponentFixture<ConnexionReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
