import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenotifComponent } from './updatenotif.component';

describe('UpdatenotifComponent', () => {
  let component: UpdatenotifComponent;
  let fixture: ComponentFixture<UpdatenotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatenotifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatenotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
