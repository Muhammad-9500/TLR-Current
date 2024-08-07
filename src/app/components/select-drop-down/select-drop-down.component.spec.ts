import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDropDownComponent } from './select-drop-down.component';

describe('SelectDropDownComponent', () => {
  let component: SelectDropDownComponent;
  let fixture: ComponentFixture<SelectDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectDropDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
