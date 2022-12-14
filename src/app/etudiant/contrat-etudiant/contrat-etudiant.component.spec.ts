import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratEtudiantComponent } from './contrat-etudiant.component';

describe('ContratEtudiantComponent', () => {
  let component: ContratEtudiantComponent;
  let fixture: ComponentFixture<ContratEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
