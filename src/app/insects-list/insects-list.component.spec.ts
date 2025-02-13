import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsectsListComponent } from './insects-list.component';

describe('InsectsListComponent', () => {
  let component: InsectsListComponent;
  let fixture: ComponentFixture<InsectsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsectsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
