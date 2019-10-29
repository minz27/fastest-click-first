import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTwoComponent } from './click-two.component';

describe('ClickTwoComponent', () => {
  let component: ClickTwoComponent;
  let fixture: ComponentFixture<ClickTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
