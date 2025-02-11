import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingSystemComponent } from './binding-system.component';

describe('BindingSystemComponent', () => {
  let component: BindingSystemComponent;
  let fixture: ComponentFixture<BindingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
