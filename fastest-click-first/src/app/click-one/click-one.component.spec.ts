import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickOneComponent } from './click-one.component';

describe('ClickOneComponent', () => {
  let component: ClickOneComponent;
  let fixture: ComponentFixture<ClickOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
