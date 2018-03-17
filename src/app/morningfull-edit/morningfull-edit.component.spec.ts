import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningfullEditComponent } from './morningfull-edit.component';

describe('MorningfullEditComponent', () => {
  let component: MorningfullEditComponent;
  let fixture: ComponentFixture<MorningfullEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorningfullEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorningfullEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
