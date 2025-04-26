import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatWassapComponent } from './float-wassap.component';

describe('FloatWassapComponent', () => {
  let component: FloatWassapComponent;
  let fixture: ComponentFixture<FloatWassapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatWassapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatWassapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
