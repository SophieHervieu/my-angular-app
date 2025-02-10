import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent4Component } from './child-component-4.component';

describe('ChildComponent4Component', () => {
  let component: ChildComponent4Component;
  let fixture: ComponentFixture<ChildComponent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
