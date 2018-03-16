import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEveningfullComponent } from './new-eveningfull.component';

describe('NewEveningfullComponent', () => {
  let component: NewEveningfullComponent;
  let fixture: ComponentFixture<NewEveningfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEveningfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEveningfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
