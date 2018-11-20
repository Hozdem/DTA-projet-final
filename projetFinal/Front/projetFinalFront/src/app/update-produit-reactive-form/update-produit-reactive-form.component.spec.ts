import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProduitReactiveFormComponent } from './update-produit-reactive-form.component';

describe('UpdateProduitReactiveFormComponent', () => {
  let component: UpdateProduitReactiveFormComponent;
  let fixture: ComponentFixture<UpdateProduitReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProduitReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProduitReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
