import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EveningfullEditComponent } from './eveningfull-edit.component';

describe('EveningfullEditComponent', () => {
  let component: EveningfullEditComponent;
  let fixture: ComponentFixture<EveningfullEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EveningfullEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EveningfullEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
