import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMorningfullComponent } from './new-morningfull.component';

describe('NewMorningfullComponent', () => {
  let component: NewMorningfullComponent;
  let fixture: ComponentFixture<NewMorningfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMorningfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMorningfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
