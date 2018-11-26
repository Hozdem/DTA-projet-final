import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePanierComponent } from './fiche-panier.component';

describe('FichePanierComponent', () => {
  let component: FichePanierComponent;
  let fixture: ComponentFixture<FichePanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichePanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
