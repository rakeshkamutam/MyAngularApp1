import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testapiview1Component } from './testapiview1.component';

describe('Testapiview1Component', () => {
  let component: Testapiview1Component;
  let fixture: ComponentFixture<Testapiview1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testapiview1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testapiview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
