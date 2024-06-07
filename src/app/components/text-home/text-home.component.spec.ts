import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHomeComponent } from './text-home.component';

describe('TextHomeComponent', () => {
  let component: TextHomeComponent;
  let fixture: ComponentFixture<TextHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
