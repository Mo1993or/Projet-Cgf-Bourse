import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfilageComponent } from './form-profilage.component';

describe('FormProfilageComponent', () => {
  let component: FormProfilageComponent;
  let fixture: ComponentFixture<FormProfilageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProfilageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfilageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
