import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickZeroComponent } from './click-zero.component';

describe('ClickZeroComponent', () => {
  let component: ClickZeroComponent;
  let fixture: ComponentFixture<ClickZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
