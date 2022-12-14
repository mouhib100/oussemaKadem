import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantDomaineComponent } from './etudiant-domaine.component';

describe('EtudiantDomaineComponent', () => {
  let component: EtudiantDomaineComponent;
  let fixture: ComponentFixture<EtudiantDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantDomaineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
