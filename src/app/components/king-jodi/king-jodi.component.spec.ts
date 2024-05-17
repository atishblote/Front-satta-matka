import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingJodiComponent } from './king-jodi.component';

describe('KingJodiComponent', () => {
  let component: KingJodiComponent;
  let fixture: ComponentFixture<KingJodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingJodiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KingJodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
