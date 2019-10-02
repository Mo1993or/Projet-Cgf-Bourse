import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOuvertureCompteComponent } from './form-ouverture-compte.component';

describe('FormOuvertureCompteComponent', () => {
  let component: FormOuvertureCompteComponent;
  let fixture: ComponentFixture<FormOuvertureCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOuvertureCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOuvertureCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
