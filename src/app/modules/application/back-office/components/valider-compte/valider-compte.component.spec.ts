import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderCompteComponent } from './valider-compte.component';

describe('ValiderCompteComponent', () => {
  let component: ValiderCompteComponent;
  let fixture: ComponentFixture<ValiderCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiderCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiderCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
