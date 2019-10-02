import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCompteComponent } from './info-compte.component';

describe('InfoCompteComponent', () => {
  let component: InfoCompteComponent;
  let fixture: ComponentFixture<InfoCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
