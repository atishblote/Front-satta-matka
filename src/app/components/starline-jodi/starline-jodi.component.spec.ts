import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarlineJodiComponent } from './starline-jodi.component';

describe('StarlineJodiComponent', () => {
  let component: StarlineJodiComponent;
  let fixture: ComponentFixture<StarlineJodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarlineJodiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarlineJodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
