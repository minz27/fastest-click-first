import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickThreeComponent } from './click-three.component';

describe('ClickThreeComponent', () => {
  let component: ClickThreeComponent;
  let fixture: ComponentFixture<ClickThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
