import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurComponent } from './about-our.component';

describe('AboutOurComponent', () => {
  let component: AboutOurComponent;
  let fixture: ComponentFixture<AboutOurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutOurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutOurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
