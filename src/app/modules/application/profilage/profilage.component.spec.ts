import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilageComponent } from './profilage.component';

describe('ProfilageComponent', () => {
  let component: ProfilageComponent;
  let fixture: ComponentFixture<ProfilageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
