import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningfullDetailsComponent } from './morningfull-details.component';

describe('MorningfullDetailsComponent', () => {
  let component: MorningfullDetailsComponent;
  let fixture: ComponentFixture<MorningfullDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorningfullDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorningfullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
