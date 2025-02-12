import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesChildComponentComponent } from './pipes-child-component.component';

describe('PipesChildComponentComponent', () => {
  let component: PipesChildComponentComponent;
  let fixture: ComponentFixture<PipesChildComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesChildComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
