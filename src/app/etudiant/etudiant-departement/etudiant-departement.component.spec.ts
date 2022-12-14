import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantDepartementComponent } from './etudiant-departement.component';

describe('EtudiantDepartementComponent', () => {
  let component: EtudiantDepartementComponent;
  let fixture: ComponentFixture<EtudiantDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantDepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
