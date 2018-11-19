import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProduitReactiveFormComponent } from './add-produit-reactive-form.component';

describe('AddProduitReactiveFormComponent', () => {
  let component: AddProduitReactiveFormComponent;
  let fixture: ComponentFixture<AddProduitReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProduitReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProduitReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
