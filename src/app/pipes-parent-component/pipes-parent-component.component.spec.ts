import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesParentComponentComponent } from './pipes-parent-component.component';

describe('PipesParentComponentComponent', () => {
  let component: PipesParentComponentComponent;
  let fixture: ComponentFixture<PipesParentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesParentComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
