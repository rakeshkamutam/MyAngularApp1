import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemedBoxComponent } from './themed-box.component';

describe('ThemedBoxComponent', () => {
  let component: ThemedBoxComponent;
  let fixture: ComponentFixture<ThemedBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemedBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
