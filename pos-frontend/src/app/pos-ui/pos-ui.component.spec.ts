import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosUiComponent } from './pos-ui.component';

describe('PosUiComponent', () => {
  let component: PosUiComponent;
  let fixture: ComponentFixture<PosUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
