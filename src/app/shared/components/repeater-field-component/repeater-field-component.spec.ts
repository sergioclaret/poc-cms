import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeaterFieldComponent } from './repeater-field-component';

describe('RepeaterFieldComponent', () => {
  let component: RepeaterFieldComponent;
  let fixture: ComponentFixture<RepeaterFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeaterFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeaterFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
