import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignContratComponent } from './assign-contrat.component';

describe('AssignContratComponent', () => {
  let component: AssignContratComponent;
  let fixture: ComponentFixture<AssignContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignContratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
