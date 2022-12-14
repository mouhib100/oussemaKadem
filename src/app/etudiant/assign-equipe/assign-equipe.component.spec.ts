import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEquipeComponent } from './assign-equipe.component';

describe('AssignEquipeComponent', () => {
  let component: AssignEquipeComponent;
  let fixture: ComponentFixture<AssignEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignEquipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
