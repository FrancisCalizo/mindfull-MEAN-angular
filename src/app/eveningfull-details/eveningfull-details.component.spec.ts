import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EveningfullDetailsComponent } from './eveningfull-details.component';

describe('EveningfullDetailsComponent', () => {
  let component: EveningfullDetailsComponent;
  let fixture: ComponentFixture<EveningfullDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EveningfullDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EveningfullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
