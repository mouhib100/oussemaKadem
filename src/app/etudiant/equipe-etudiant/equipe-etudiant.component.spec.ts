import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeEtudiantComponent } from './equipe-etudiant.component';

describe('EquipeEtudiantComponent', () => {
  let component: EquipeEtudiantComponent;
  let fixture: ComponentFixture<EquipeEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipeEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
